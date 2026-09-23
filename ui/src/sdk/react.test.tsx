import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, act, cleanup } from '@testing-library/react';
import {
  defineTool, defineNodeRenderer, useGraph, useToast, useStorage,
} from './index';
import type { CodefyUIPluginAPI, SerializedGraph } from './index';

/**
 * A fake host API whose graph can be mutated to drive onGraphChanged. The
 * members apiVersion 3-5 added are stubs: the helpers tested here never call
 * them, but the type has them.
 */
function makeFakeApi() {
  let graph: SerializedGraph = { nodes: [], edges: [] };
  const listeners = new Set<() => void>();
  const api: CodefyUIPluginAPI = {
    apiVersion: 1,
    pluginId: 'test-plugin',
    ui: {
      addFloatingWidget: ({ id }) => {
        let el = document.getElementById(id);
        if (!el) {
          el = document.createElement('div');
          el.id = id;
          document.body.appendChild(el);
        }
        return el;
      },
      toast: vi.fn(),
      addPanel: vi.fn(),
      removePanel: vi.fn(),
      addToolbarButton: vi.fn(() => () => {}),
      removeToolbarButton: vi.fn(),
    },
    graph: {
      getGraph: () => graph,
      getNodeDefinitions: () => [
        { node_name: 'Linear', category: 'Layer', description: '', inputs: [], outputs: [], params: [] },
      ],
      applyOperations: vi.fn(() => ({ results: [], refs: {}, node_count: 0, edge_count: 0 })),
      onGraphChanged: (cb) => { listeners.add(cb); return () => { listeners.delete(cb); }; },
      getView: vi.fn(),
    },
    workspace: {
      openGraphs: vi.fn(() => []),
      tabs: vi.fn(() => []),
      snapshot: vi.fn(),
      applyOperations: vi.fn(),
      onChanged: vi.fn(() => () => {}),
    },
    nodes: { registerRenderer: () => () => {} },
    events: { onExecution: vi.fn(() => () => {}) },
    runs: { list: vi.fn(), get: vi.fn(), metrics: vi.fn() },
    http: { fetch: vi.fn(async () => new Response('ok')) },
    storage: {
      get: (k) => window.localStorage.getItem(k),
      set: (k, v) => window.localStorage.setItem(k, v),
      remove: (k) => window.localStorage.removeItem(k),
    },
  };
  const setGraph = (g: SerializedGraph) => { graph = g; listeners.forEach((l) => l()); };
  return { api, setGraph };
}

afterEach(() => {
  cleanup();
  document.body.innerHTML = '';
  window.localStorage.clear();
});

describe('defineTool', () => {
  it('mounts the component into the widget container with the API in context', async () => {
    const { api } = makeFakeApi();
    const activate = defineTool({ id: 'panel', title: 'Panel' }, ({ api: a }) => (
      <div data-testid="mounted">{a.pluginId}</div>
    ));
    await act(async () => { activate(api); });

    const el = document.querySelector('#panel [data-testid="mounted"]');
    expect(el?.textContent).toBe('test-plugin');
    expect(document.getElementById('panel')?.getAttribute('aria-label')).toBe('Panel');
  });
});

describe('hooks', () => {
  it('useGraph re-renders when the graph changes', async () => {
    const { api, setGraph } = makeFakeApi();
    function Panel() {
      const g = useGraph();
      return <div data-testid="n">{g.nodes.length}</div>;
    }
    await act(async () => { defineTool({ id: 'g' }, Panel)(api); });
    expect(document.querySelector('#g [data-testid="n"]')?.textContent).toBe('0');

    await act(async () => {
      setGraph({ nodes: [{ id: 'a', type: 'Linear', position: { x: 0, y: 0 }, data: { params: {} } }], edges: [] });
    });
    expect(document.querySelector('#g [data-testid="n"]')?.textContent).toBe('1');
  });

  it('useStorage reads and persists through the plugin storage', async () => {
    const { api } = makeFakeApi();
    let setter: (v: string) => void = () => {};
    function Panel() {
      const [val, set] = useStorage('greeting', 'hello');
      setter = set;
      return <div data-testid="v">{val}</div>;
    }
    await act(async () => { defineTool({ id: 's' }, Panel)(api); });
    expect(document.querySelector('#s [data-testid="v"]')?.textContent).toBe('hello');

    await act(async () => { setter('world'); });
    expect(document.querySelector('#s [data-testid="v"]')?.textContent).toBe('world');
    expect(window.localStorage.getItem('greeting')).toBe('world');
  });

  it('hooks throw when used outside a defineTool provider', () => {
    function Bare() { useToast(); return null; }
    // Silence React's error-boundary console noise for the expected throw.
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Bare />)).toThrow(/defineTool/);
    spy.mockRestore();
  });
});

describe('defineNodeRenderer', () => {
  it('mounts, updates on new context, and unmounts a React node body', () => {
    const renderer = defineNodeRenderer(({ node }) => (
      <span data-testid="nb">{String(node.params.v)}</span>
    ));
    const el = document.createElement('div');
    document.body.appendChild(el);
    const ctx = (v: unknown) => ({ node: { id: 'n', type: 'p:Foo', params: { v } } });

    act(() => { renderer.mount(el, ctx(1)); });
    expect(el.querySelector('[data-testid="nb"]')?.textContent).toBe('1');

    act(() => { renderer.update!(el, ctx(2)); });
    expect(el.querySelector('[data-testid="nb"]')?.textContent).toBe('2');

    act(() => { renderer.unmount!(el); });
    expect(el.querySelector('[data-testid="nb"]')).toBeNull();
  });
});

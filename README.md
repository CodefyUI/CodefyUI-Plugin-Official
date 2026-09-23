# CodefyUI-Plugin-Official

> The official starter template for [CodefyUI](https://github.com/treeleaves30760/CodefyUI) plugin packs. **Fork this repo to publish your own plugin.**

This template is a complete, working CodefyUI plugin. It ships:

- A fully-commented [`cdui.plugin.toml`](./cdui.plugin.toml) manifest
- Two example nodes — [`HelloPlugin`](./nodes/hello_plugin_node.py) (minimal) and [`MovingAverage`](./nodes/moving_average_node.py) (uses torch + Teaching Inspector steps)
- Example workflows under [`examples/`](./examples) the CodefyUI example browser picks up
- An [`assets/`](./assets) directory CodefyUI serves at `/plugins/<your-id>/assets/...`
- A `tests/` suite a forker can extend

Users install this exact repo with:

```bash
cdui plugin install treeleaves30760/CodefyUI-Plugin-Official
# or pin a tag
cdui plugin install treeleaves30760/CodefyUI-Plugin-Official@v0.1.0
```

---

## Forking the template (5 minutes)

1. **Fork on GitHub** — hit the *Fork* button at the top of this page.
2. **Clone your fork** locally:
   ```bash
   git clone git@github.com:your-username/your-repo.git
   cd your-repo
   ```
3. **Edit [`cdui.plugin.toml`](./cdui.plugin.toml)**:
   - Change `plugin.id` to a globally-unique kebab-case name (`^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`). It must NOT collide with a built-in catalog id (`c1`–`c6`).
   - Update `name`, `description`, `version`, `authors`, `homepage`.
   - Keep `schema_version = 1` and align `requires_codefyui` with the CodefyUI version you've tested against.
4. **Replace the example nodes** in [`nodes/`](./nodes) with yours. Each `.py` file under `nodes/` whose classes subclass `BaseNode` and define `NODE_NAME` gets auto-registered.
5. **Update [`tests/conftest.py`](./tests/conftest.py)** — change `PLUGIN_ID` to match the id in your manifest.
6. **Re-prefix the node types in [`examples/`](./examples)** — every `graph.json` refers to a plugin node by its
   *namespaced* type, `"<your-id>:<NODE_NAME>"`. The graphs here say `"official-template:HelloPlugin"`; if your
   manifest id is `acme-vision`, they must say `"acme-vision:HelloPlugin"`. A type string that does not match a
   registered node is not an error — the canvas draws the node as an empty box with no ports and silently drops
   every edge attached to it, so the example *looks* broken rather than reporting a problem.
7. **Test locally** (see [Local testing](#local-testing) below).
8. **Push to GitHub**, tag a release, and tell your users:
   ```bash
   cdui plugin install your-username/your-repo
   ```

---

## File layout

```
your-plugin-repo/
├── cdui.plugin.toml          # REQUIRED — the manifest
├── README.md
├── LICENSE
├── nodes/                    # REQUIRED — your BaseNode subclasses
│   ├── __init__.py           # REQUIRED, empty
│   └── *.py                  # one or more node files
├── presets/                  # optional — *.json preset files
├── examples/                 # optional — graph.json under <Category>/<Name>/
├── assets/                   # optional — static files served at /plugins/<id>/assets/
└── tests/                    # optional — your own pytest suite
    ├── conftest.py
    └── test_*.py
```

The directory names in `[content]` of the manifest are **conventions**, not magic. You can override any of them in `cdui.plugin.toml` if you want a different layout, but the defaults match this template.

---

## Manifest reference

| Field | Required | Notes |
|-------|----------|-------|
| `plugin.id` | ✔ | lowercase kebab-case; `^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`; used as install-dir name and Python module name (kebab → snake). |
| `plugin.name` | ✔ | Display name. |
| `plugin.version` | ✔ | Semver. |
| `plugin.description` | ✔ | One paragraph; shown in `info` / `search` / palette tooltips. |
| `plugin.schema_version` | ✔ | `1` today. The CLI rejects unknown versions. |
| `plugin.requires_codefyui` | ✔ | PEP 440 specifier — pin the lowest version you've tested against. |
| `plugin.authors`, `license`, `homepage` | — | Free-text metadata, surfaced in `info`. |
| `content.nodes_dir` | — | Default `nodes`. |
| `content.presets_dir` | — | Default `presets`. |
| `content.examples_dir` | — | Default `examples`. |
| `content.assets_dir` | — | Default `assets`. Mounted at `/plugins/<id>/assets/`. |
| `python_deps.<name>` | — | Constraint string (`>=1.0`, `==2.3.4`, or bare version). Installed via `uv pip install` into the codefyui venv. |
| `lessons.chapters`, `lessons.lessons` | — | Cross-link to a textbook / lesson series. Shown in `info` and tooltips. |
| `security.allowed_modules` | — | Extras for the AST validator allow-list. Forces `--trust-author` on URL installs. |

---

## Writing a node

Subclass `BaseNode`, define `NODE_NAME` / `CATEGORY` / `DESCRIPTION` (and `DETAILS` when there is more to say), implement the classmethods plus `execute`:

```python
from app.core.node_base import (
    BaseNode, DataType, ParamDefinition, ParamType, PortDefinition,
)

class MyNode(BaseNode):
    NODE_NAME = "MyNode"
    CATEGORY = "Demo"
    DESCRIPTION = "Multiplies a tensor by a constant factor"
    DETAILS = "The longer explanation: what the inputs must look like, edge cases, related nodes."

    @classmethod
    def define_inputs(cls):
        return [PortDefinition(name="x", data_type=DataType.TENSOR)]

    @classmethod
    def define_outputs(cls):
        return [PortDefinition(name="y", data_type=DataType.TENSOR)]

    @classmethod
    def define_params(cls):
        return [ParamDefinition(name="factor", param_type=ParamType.FLOAT, default=1.0)]

    def execute(self, inputs, params, progress_callback=None, *, context=None):
        return {"y": inputs["x"] * params["factor"]}
```

`DESCRIPTION` is the one-line summary the node palette shows, and the palette cuts it off past 56 characters. Everything longer goes in `DETAILS`, which the config panel and the Docs tab show under the summary; leave it empty when the summary says it all. The tests for the two example nodes check both.

Available `DataType` values: `TENSOR`, `MODEL`, `DATASET`, `DATALOADER`, `OPTIMIZER`, `LOSS_FN`, `SCALAR`, `STRING`, `IMAGE`, `LIST`, `ANY`, `TRIGGER`.

Available `ParamType` values: `INT`, `FLOAT`, `STRING`, `BOOL`, `SELECT`, `MODEL_FILE`, `IMAGE_FILE`, `TENSOR_GRID`.

### Teaching Inspector integration

If your node performs a multi-step computation, record intermediate tensors with `StepRecorder`:

```python
from app.core.step_trace import StepRecorder

def execute(self, inputs, params, *, context=None):
    verbose = context is not None and getattr(context, "verbose", False)
    recorder = StepRecorder() if verbose else None

    y = inputs["x"] * 2
    if recorder is not None:
        recorder.record("double", "y = 2x", x=inputs["x"], y=y)

    y = y + 1
    if recorder is not None:
        recorder.record("offset", "y = y + 1", y=y)

    result = {"output": y}
    if recorder is not None and recorder.steps:
        result["__steps__"] = recorder.steps
    return result
```

Students who toggle ⚙ Settings → Verbose mode and click your node in the canvas see every step.

See [`nodes/moving_average_node.py`](./nodes/moving_average_node.py) for a runnable example.

---

## Frontend UI (React)

Plugins can add editor UI — a floating tool panel — written in **React + TypeScript**, not a hand-written `index.js`. The React app lives in [`ui/`](./ui) and builds to a single `frontend/index.js` bundle that the editor imports.

```bash
cd ui
pnpm install
pnpm build        # emits ../frontend/index.js (commit it)
pnpm dev          # rebuild on every change — pair with `cdui plugin dev`
```

The manifest points at the built bundle:

```toml
[frontend]
entry = "frontend/index.js"
```

Your entry is a React component wrapped with `defineTool`:

```tsx
// ui/src/index.tsx
import { defineTool, useGraph, useToast } from './sdk';

function Panel() {
  const graph = useGraph();                 // re-renders on graph changes
  const toast = useToast();
  return <button onClick={() => toast(`${graph.nodes.length} nodes`)}>Count</button>;
}

export default defineTool({ id: 'my-panel', title: 'My Panel' }, Panel);
```

The typed SDK is vendored in [`ui/src/sdk/`](./ui/src/sdk) (clone-and-own). It is the same SDK `cdui plugin new --ui` writes, at plugin API version 5:

- **Types** — `CodefyUIPluginAPI`, `GraphOp`, `NodeDefinition`, … mirror the host exactly, so you get full autocomplete instead of copying interfaces by hand. `types.ts` is generated from CodefyUI's canonical `frontend/src/plugins/contract.ts`. A member added after apiVersion 1 says which version it needs; check `api.apiVersion` before using one if your plugin supports older CodefyUI releases.
- **`defineTool(opts, Component)`** — mounts your component into a floating widget and provides the API to the whole subtree. `mountTool(api, opts, Component)` does the same from inside your own `activate`, as [`ui/src/index.tsx`](./ui/src/index.tsx) does.
- **`mountPanel(api, opts, Component)`** — the same for a tab in the editor's bottom dock (`api.apiVersion >= 3`).
- **Hooks** — `useGraph`, `useNodeDefinitions`, `useGraphChanged`, `useApplyOperations`, `useToast`, `useCodefyFetch`, `useStorage`, plus `useCodefyUI()` for the raw API object. `useExecutionEvents` (live run events) and `useRuns` (run history) need `api.apiVersion >= 3`.
- **`defineNodeRenderer(Component)`** — draw a node's card body with React. Register it via `api.nodes.registerRenderer(nodeType, …)` (needs `api.apiVersion >= 2`); the host keeps the title, ports, and params. A node type is the manifest id exactly as written, hyphens included, then the node name: plugin `my-plugin` exposes `my-plugin:MyNode`. See [`ui/src/MovingAverageNodeBody.tsx`](./ui/src/MovingAverageNodeBody.tsx) and its registration in [`ui/src/index.tsx`](./ui/src/index.tsx).

To bring `ui/src/sdk/` up to a newer CodefyUI release, run this from a checkout of that release; the `--template` option is newer than CodefyUI 2.8.5. It overwrites `types.ts`, `react.tsx` and `index.ts` wherever they differ from that release's SDK, your own edits to them included, and leaves every other file alone:

```bash
python scripts/sync_plugin_sdk.py --template path/to/your-plugin
```

React is bundled with your plugin, so end users still install with just `cdui plugin install …` — no Node required on their side. Requires CodefyUI **≥ 1.3.0**. While developing, `cdui plugin dev .` (watches `frontend/`) paired with `pnpm dev` (rebuilds on save) hot-reloads both your Python nodes and the panel — no manual browser refresh.

The whole `ui/` folder is optional — delete it (and the `[frontend]` stanza) if your plugin is backend-only.

---

## AST security gate

CodefyUI runs a strict AST validator on every `.py` file in the repository, `tests/` included, before it'll install a third-party plugin from a URL: a node can import any file in the plugin, so every file is read (see [Local testing](#local-testing) for tests that pass). The full rules, including the capabilities a manifest can declare, are in [CodefyUI's plugin docs](https://docs.codefyui.com/advanced/plugins#security--three-tiers). Blocked by default:

**Modules** (top-level): `os`, `subprocess`, `shutil`, `sys`, `importlib`, `ctypes`, `socket`, `http`, `urllib`, `requests`, `pathlib`, `tempfile`, `signal`, `pickle`, `shelve`, `code`, `codeop`, `compileall`.

**Builtin calls**: `exec`, `eval`, `compile`, `__import__`, `breakpoint`, `globals`, `locals`, `getattr`*, `setattr`*, `delattr`*.

*\* `getattr` / `setattr` / `delattr` are allowed when the attribute name is a string literal: `getattr(context, "verbose", False)` works, `getattr(obj, dynamic_name)` doesn't.*

If your plugin legitimately needs one of these modules, declare the capability that covers it first: `[security] capabilities = ["network"]` for `requests`, `urllib`, `http` or `socket`, `"filesystem"` for `pathlib`, `tempfile` or `shutil`, `"process-env"` for `os`. Users confirm a capability when they install. Only a module no capability covers, such as `subprocess` or `sys`, goes in `[security].allowed_modules`, and then users must install with `--trust-author`. Ask for either **sparingly** — most teaching nodes need neither, and every grant is one more thing to agree to at install.

---

## Local testing

The example tests show the pattern: they import the nodes straight from the repository root (`from nodes.hello_plugin_node import HelloPluginNode`), which [`pytest.ini`](./pytest.ini) makes possible with `pythonpath = .` -- no `cdui plugin install` needed first. Keep `tests/` free of `import sys`, `os`, `subprocess` and the other modules the [security scan](#ast-security-gate) refuses: the scan reads every `.py` file in the repository, tests included, and one such import stops the whole plugin from installing.

Run with the CodefyUI backend venv active:

```bash
# from your plugin repo root
cd path/to/CodefyUI/backend          # any directory with the codefyui venv works
uv run pytest path/to/your-plugin/tests/
```

Or set `PYTHONPATH` to include CodefyUI's `backend/`:

```bash
cd path/to/your-plugin
PYTHONPATH=path/to/CodefyUI/backend pytest tests/
```

---

## Publishing

1. Commit your changes.
2. Tag a release: `git tag v0.1.0 && git push --tags`.
3. Push the branch: `git push`.

Users now install your plugin with one of:

```bash
cdui plugin install your-username/your-repo
cdui plugin install your-username/your-repo@v0.1.0
cdui plugin install https://github.com/your-username/your-repo
```

`cdui plugin install` will:
1. Resolve the ref to a SHA via the GitHub API.
2. Download the tarball from `codeload.github.com`.
3. Read + validate your manifest.
4. AST-validate every `.py` file in the repository, tests included.
5. Atomically move the contents to `<USER_DATA>/plugins/<your-id>/`.
6. Run `uv pip install` for your `python_deps`.
7. Hot-reload the running backend if `cdui start` is up.

A confirmation prompt protects users on first install; pass `-y` to skip it in CI.

---

## What goes where

| You want to ship... | Put it in... | Discovered as |
|---------------------|--------------|---------------|
| A node | `nodes/your_node_file.py` | `/api/nodes` with `provider: "plugin:<your-id>"` |
| A preset | `presets/*.json` | `/api/presets` |
| An example graph | `examples/<Category>/<Name>/graph.json` | `/api/examples/list` with `source: "plugin:<your-id>"` |

Inside an example graph, refer to your own nodes by their namespaced type — `"type": "<your-id>:<NODE_NAME>"` —
and to CodefyUI's built-ins by their bare name (`"Start"`, `"Print"`, `"TensorInput"`). The namespace is what keeps
two plugins from colliding on the same `NODE_NAME`.
| A static file (CSV, image, JSON) | `assets/your_file` | `/plugins/<your-id>/assets/your_file` |

---

## License

This template is MIT (see [LICENSE](./LICENSE)) — your fork is free to use any license you like.

CodefyUI itself is AGPL-3.0-only.

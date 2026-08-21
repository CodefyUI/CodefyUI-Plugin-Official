"""Validate the example graphs under ``examples/``.

Why this file exists: a wrong ``"type"`` string in a ``graph.json`` is NOT an
error anywhere in the stack. The backend's example scanner only parses the
JSON, and the canvas falls back to an empty node definition -- no ports, no
params, a generic category badge -- for any type it cannot resolve. Every edge
attached to that node then references a handle that does not exist and is
dropped on load. The result is an example that opens as a row of disconnected
boxes while every layer reports success.

That is exactly what shipped here: both Demo graphs named their plugin nodes
``"HelloPlugin"`` / ``"MovingAverage"`` when the registry namespaces them as
``"official-template:HelloPlugin"`` / ``"official-template:MovingAverage"``.

These tests are also the pattern to copy when you fork the template: point
them at your own nodes and they will catch the same mistake in your graphs
before your users see it.
"""

from __future__ import annotations

import json
from pathlib import Path

import pytest

from cdui_plugins.official_template.nodes.hello_plugin_node import HelloPluginNode
from cdui_plugins.official_template.nodes.moving_average_node import MovingAverageNode

from .conftest import PLUGIN_ID

_REPO_ROOT = Path(__file__).resolve().parents[1]
_EXAMPLES_DIR = _REPO_ROOT / "examples"

# Every node this plugin ships, keyed by NODE_NAME. Extend this when you add
# a node -- it is what makes the "did you forget the prefix?" check below work.
OWN_NODES = {
    HelloPluginNode.NODE_NAME: HelloPluginNode,
    MovingAverageNode.NODE_NAME: MovingAverageNode,
}

# Built-in CodefyUI nodes these examples wire our nodes to. Bare (un-namespaced)
# types are legal only for built-ins, so the graphs are checked against this
# list rather than against "anything without a colon".
BUILTIN_TYPES = {"Start", "Print", "TensorInput"}


def _example_files() -> list[Path]:
    return sorted(_EXAMPLES_DIR.rglob("graph.json"))


def _ids(paths: list[Path]) -> list[str]:
    return [p.parent.relative_to(_EXAMPLES_DIR).as_posix() for p in paths]


_FILES = _example_files()


def test_examples_directory_is_not_empty():
    """Guards the glob itself: a typo'd path would make every test below vacuous."""
    assert _FILES, f"no graph.json found under {_EXAMPLES_DIR}"


@pytest.mark.parametrize("path", _FILES, ids=_ids(_FILES))
def test_example_parses(path: Path):
    data = json.loads(path.read_text(encoding="utf-8"))
    assert data.get("nodes"), f"{path} declares no nodes"


@pytest.mark.parametrize("path", _FILES, ids=_ids(_FILES))
def test_node_types_resolve(path: Path):
    """Every ``type`` is either a known built-in or one of OUR namespaced nodes.

    The bare-name check is the important one. ``"HelloPlugin"`` looks right to
    a human reading the file, which is precisely why the original bug survived
    review -- the name matches a real node, it is only missing the namespace.
    """
    data = json.loads(path.read_text(encoding="utf-8"))
    for node in data["nodes"]:
        node_type = node["type"]

        if ":" not in node_type:
            assert node_type not in OWN_NODES, (
                f"{path}: node '{node['id']}' uses the bare type '{node_type}', but "
                f"that is a node THIS plugin ships. It must be namespaced as "
                f"'{PLUGIN_ID}:{node_type}' or the canvas cannot resolve it."
            )
            assert node_type in BUILTIN_TYPES, (
                f"{path}: node '{node['id']}' uses unknown built-in type '{node_type}'. "
                f"Add it to BUILTIN_TYPES if CodefyUI really ships it."
            )
            continue

        prefix, _, name = node_type.partition(":")
        assert prefix == PLUGIN_ID, (
            f"{path}: node '{node['id']}' is namespaced '{prefix}:' but this plugin's "
            f"manifest id is '{PLUGIN_ID}'. If you renamed the plugin, re-prefix the "
            f"types in every example graph."
        )
        assert name in OWN_NODES, (
            f"{path}: node '{node['id']}' references '{name}', which this plugin does "
            f"not ship. Known nodes: {sorted(OWN_NODES)}"
        )


@pytest.mark.parametrize("path", _FILES, ids=_ids(_FILES))
def test_edge_handles_exist_on_our_nodes(path: Path):
    """Edge handles must name a real port, or the edge is dropped silently on load.

    Only OUR nodes can be checked here -- the built-ins' port definitions live
    in the CodefyUI backend, which a plugin repo should not have to import to
    test its own graphs. Checking our side is enough to catch a renamed port,
    which is the failure this would otherwise hide.
    """
    data = json.loads(path.read_text(encoding="utf-8"))
    ports: dict[str, tuple[set[str], set[str]]] = {}
    for node in data["nodes"]:
        _, _, name = node["type"].partition(":")
        cls = OWN_NODES.get(name) if ":" in node["type"] else None
        if cls is not None:
            ports[node["id"]] = (
                {p.name for p in cls.define_inputs()},
                {p.name for p in cls.define_outputs()},
            )

    for edge in data.get("edges", []):
        src_handle = edge.get("sourceHandle")
        if src_handle and edge["source"] in ports:
            outputs = ports[edge["source"]][1]
            assert src_handle in outputs, (
                f"{path}: edge '{edge['id']}' reads '{src_handle}' from node "
                f"'{edge['source']}', which only outputs {sorted(outputs)}"
            )

        tgt_handle = edge.get("targetHandle")
        if tgt_handle and edge["target"] in ports:
            inputs = ports[edge["target"]][0]
            assert tgt_handle in inputs, (
                f"{path}: edge '{edge['id']}' feeds '{tgt_handle}' on node "
                f"'{edge['target']}', which only accepts {sorted(inputs)}"
            )

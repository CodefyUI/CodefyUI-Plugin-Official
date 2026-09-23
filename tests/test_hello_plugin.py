"""Unit tests for HelloPluginNode."""

from __future__ import annotations

from nodes.hello_plugin_node import HelloPluginNode

from .conftest import SUMMARY_CHARS


def test_node_metadata():
    assert HelloPluginNode.NODE_NAME == "HelloPlugin"
    assert HelloPluginNode.CATEGORY == "Demo"
    out_names = [p.name for p in HelloPluginNode.define_outputs()]
    assert out_names == ["greeting"]


def test_description_is_one_palette_line_and_details_hold_the_rest():
    assert len(HelloPluginNode.DESCRIPTION) <= SUMMARY_CHARS
    assert "\n" not in HelloPluginNode.DESCRIPTION
    assert HelloPluginNode.DETAILS.strip()


def test_default_greeting():
    out = HelloPluginNode().execute({}, {})
    assert "world" in out["greeting"]


def test_custom_name_greeting():
    out = HelloPluginNode().execute({}, {"name": "Alice"})
    assert out["greeting"] == "Hello, Alice! Greetings from a CodefyUI plugin."


def test_blank_name_falls_back_to_world():
    out = HelloPluginNode().execute({}, {"name": "   "})
    assert "world" in out["greeting"]

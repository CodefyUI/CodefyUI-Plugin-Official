"""HelloPluginNode — the smallest possible CodefyUI node.

The minimal demonstration of the BaseNode contract:
  - One STRING param (`name`) with a default
  - No inputs
  - One STRING output (`greeting`)
  - Pure-Python execute, no torch

When you fork this template, rename the class + NODE_NAME, replace the
``execute`` body, and add inputs / params as your plugin needs.
"""

from __future__ import annotations

from typing import Any

from app.core.node_base import (
    BaseNode,
    DataType,
    ParamDefinition,
    ParamType,
    PortDefinition,
)


class HelloPluginNode(BaseNode):
    NODE_NAME = "HelloPlugin"
    CATEGORY = "Demo"
    DESCRIPTION = "Greets the person named in the `name` param"
    DETAILS = (
        "The `greeting` output is `Hello, <name>! Greetings from a CodefyUI "
        "plugin.`, and a blank `name` falls back to `world`. Wire it to a "
        "Print node to see the result in the Execution Log. The minimal "
        "demonstration of the BaseNode contract: fork this template and "
        "replace it with whatever your plugin does. DESCRIPTION is the "
        "one-line summary the palette row shows, cut off past 56 characters. "
        "DETAILS is this longer text, which only the config panel and the Docs "
        "tab show; leave it empty when the summary already says it all."
    )

    @classmethod
    def define_inputs(cls) -> list[PortDefinition]:
        return []

    @classmethod
    def define_outputs(cls) -> list[PortDefinition]:
        return [
            PortDefinition(
                name="greeting",
                data_type=DataType.STRING,
                description="The composed greeting string.",
            ),
        ]

    @classmethod
    def define_params(cls) -> list[ParamDefinition]:
        return [
            ParamDefinition(
                name="name",
                param_type=ParamType.STRING,
                default="world",
                description="Who to greet.",
            ),
        ]

    def execute(
        self,
        inputs: dict[str, Any],
        params: dict[str, Any],
        progress_callback: Any | None = None,
        *,
        context: Any = None,
    ) -> dict[str, Any]:
        name = str(params.get("name", "world")).strip() or "world"
        return {"greeting": f"Hello, {name}! Greetings from a CodefyUI plugin."}

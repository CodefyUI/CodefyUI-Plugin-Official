"""MovingAverageNode — sliding-window mean of a 1D tensor.

A more realistic example node, demonstrating:
  - TENSOR input/output ports
  - INT param with `min_value` validation
  - Use of ``torch`` (only ``torch`` and ``numpy`` are on the default
    plugin allow-list — everything else needs ``[security].allowed_modules``)
  - Integration with the Teaching Inspector via ``StepRecorder`` so
    students can see the cumulative-sum trick step by step

Output length is ``L - window + 1`` where ``L`` is the input length.
"""

from __future__ import annotations

from typing import Any

import torch

from app.core.node_base import (
    BaseNode,
    DataType,
    ParamDefinition,
    ParamType,
    PortDefinition,
)
from app.core.step_trace import StepRecorder


class MovingAverageNode(BaseNode):
    NODE_NAME = "MovingAverage"
    CATEGORY = "Demo"
    DESCRIPTION = "Sliding-window mean of a 1D tensor"
    DETAILS = (
        "Uses the cumulative-sum trick to compute every window sum in O(L), "
        "then divides by the window size to get the mean. The output length "
        "is L - window + 1. Verbose mode records each step for the Teaching "
        "Inspector."
    )

    @classmethod
    def define_inputs(cls) -> list[PortDefinition]:
        return [
            PortDefinition(
                name="tensor",
                data_type=DataType.TENSOR,
                description="1D tensor of length L.",
            ),
        ]

    @classmethod
    def define_outputs(cls) -> list[PortDefinition]:
        return [
            PortDefinition(
                name="smoothed",
                data_type=DataType.TENSOR,
                description="Sliding-window mean, length L - window + 1.",
            ),
        ]

    @classmethod
    def define_params(cls) -> list[ParamDefinition]:
        return [
            ParamDefinition(
                name="window",
                param_type=ParamType.INT,
                default=3,
                min_value=1,
                description="Sliding window size. Must be ≤ input length.",
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
        x = inputs.get("tensor")
        if x is None:
            raise ValueError("MovingAverage requires a `tensor` input.")
        if not isinstance(x, torch.Tensor):
            x = torch.as_tensor(x, dtype=torch.float32)
        x = x.float()
        if x.ndim != 1:
            raise ValueError(
                f"MovingAverage expects a 1D tensor; got shape {tuple(x.shape)}."
            )

        window = int(params.get("window", 3))
        if window < 1:
            raise ValueError("window must be ≥ 1.")
        if window > x.shape[0]:
            raise ValueError(
                f"window={window} exceeds input length {x.shape[0]}."
            )

        # `getattr(obj, "literal", default)` is the standard idiom for
        # optional-attribute access; CodefyUI's AST validator allows this
        # form (dynamic-name getattr is still blocked).
        verbose = context is not None and getattr(context, "verbose", False)
        recorder = StepRecorder() if verbose else None

        if recorder is not None:
            recorder.record(
                "input",
                "Start: 1D tensor of length L.",
                scalars={"length": float(x.shape[0]), "window": float(window)},
                tensor=x,
            )

        # Cumulative sum lets us compute every window's sum in O(L) by
        # taking differences: cumsum[i + W] − cumsum[i] = sum of window i..i+W-1.
        cumsum = torch.cat([torch.zeros(1, dtype=x.dtype), x.cumsum(dim=0)])
        window_sums = cumsum[window:] - cumsum[:-window]
        if recorder is not None:
            recorder.record(
                "window_sums",
                "Σ over each window via the cumulative-sum trick.",
                cumsum=cumsum, window_sums=window_sums,
            )

        smoothed = window_sums / float(window)
        if recorder is not None:
            recorder.record(
                "smoothed",
                "Divide each window-sum by W to get the mean.",
                smoothed=smoothed,
            )

        result: dict[str, Any] = {"smoothed": smoothed}
        if recorder is not None and recorder.steps:
            result["__steps__"] = recorder.steps
        return result

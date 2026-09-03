"""Unit tests for MovingAverageNode."""

from __future__ import annotations

import pytest
import torch

from nodes.moving_average_node import MovingAverageNode


def _run(x, window=3):
    return MovingAverageNode().execute({"tensor": x}, {"window": window})


def test_node_metadata():
    assert MovingAverageNode.NODE_NAME == "MovingAverage"
    assert MovingAverageNode.CATEGORY == "Demo"
    out_names = [p.name for p in MovingAverageNode.define_outputs()]
    assert out_names == ["smoothed"]


def test_window_one_is_identity():
    x = torch.tensor([1.0, 2.0, 3.0, 4.0])
    res = _run(x, window=1)
    assert torch.allclose(res["smoothed"], x)


def test_three_wide_window():
    x = torch.tensor([1.0, 2.0, 3.0, 4.0, 5.0])
    res = _run(x, window=3)
    # Expected: [(1+2+3)/3, (2+3+4)/3, (3+4+5)/3] = [2, 3, 4]
    assert torch.allclose(res["smoothed"], torch.tensor([2.0, 3.0, 4.0]))


def test_output_length():
    x = torch.arange(10, dtype=torch.float32)
    res = _run(x, window=3)
    assert res["smoothed"].shape == (8,)


def test_window_too_large_raises():
    with pytest.raises(ValueError, match="exceeds input length"):
        _run(torch.zeros(3), window=10)


def test_missing_input_raises():
    with pytest.raises(ValueError, match="requires"):
        MovingAverageNode().execute({}, {"window": 3})


def test_non_1d_input_raises():
    with pytest.raises(ValueError, match="1D"):
        _run(torch.zeros(3, 3), window=2)

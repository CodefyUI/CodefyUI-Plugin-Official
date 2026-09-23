"""pytest conftest for plugin-author-side tests.

The tests import the nodes straight from the repository root -- ``from
nodes.hello_plugin_node import HelloPluginNode`` -- which ``pytest.ini``
makes possible with ``pythonpath = .``. Nothing here touches ``sys``:
CodefyUI's install-time security scan reads every ``.py`` file in the
repository, tests included, and ``sys`` is one of the modules it refuses
unless a plugin asks for it, so a conftest that imported it would stop the
whole plugin from installing.

If you rename the plugin (`cdui.plugin.toml > [plugin].id`), update
``PLUGIN_ID`` below to match.
"""

from __future__ import annotations

PLUGIN_ID = "official-template"

# The editor's node palette shows a node's DESCRIPTION as a one-line summary
# and cuts it off past this many characters. The rest belongs in DETAILS,
# which the config panel and the Docs tab show under the summary.
SUMMARY_CHARS = 56

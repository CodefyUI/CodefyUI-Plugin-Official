import './styles.css';
import { mountTool, defineNodeRenderer } from './sdk';
import type { CodefyUIPluginAPI } from './sdk';
import { ExamplePanel } from './ExamplePanel';
import { MovingAverageNodeBody } from './MovingAverageNodeBody';

// The editor imports this bundle and calls the default export once at startup,
// passing the CodefyUIPluginAPI. A plugin can both mount tool panels and
// register custom node renderers.
export default function activate(api: CodefyUIPluginAPI) {
  // 1) A floating tool panel (React).
  mountTool(api, { id: 'official-template-panel', title: 'Official Template' }, ExamplePanel);

  // 2) A custom React body for this pack's MovingAverage node. A node type is
  //    the manifest id exactly as written, hyphens included, then NODE_NAME:
  //    plugin id "official-template" exposes "official-template:MovingAverage".
  api.nodes.registerRenderer(
    'official-template:MovingAverage',
    defineNodeRenderer(MovingAverageNodeBody),
  );
}

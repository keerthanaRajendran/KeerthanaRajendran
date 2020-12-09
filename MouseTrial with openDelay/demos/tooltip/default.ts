import { Tooltip, Position, TipPointerPosition } from '../../src/tooltip/tooltip';
/**
 * tooltip position sample
 */

let tooltip: Tooltip = new Tooltip({
  content: "Testing tooltip",
  mouseTrail: true,
  target: "#demoSmart",
  openDelay: 2000
});

tooltip.appendTo("#targetContainer");
define(["require", "exports", "../../src/tooltip/tooltip"], function (require, exports, tooltip_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * tooltip position sample
     */
    var tooltip = new tooltip_1.Tooltip({
        content: "Testing tooltip",
        mouseTrail: true,
        target: "#demoSmart",
        openDelay: 2000
    });
    tooltip.appendTo("#targetContainer");
});

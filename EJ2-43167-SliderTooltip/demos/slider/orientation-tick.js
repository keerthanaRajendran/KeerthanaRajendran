define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
    var defaultObj = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'Before', isVisible: true },
        showButtons: true,
        orientation: 'Vertical',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    defaultObj.appendTo('#slidetool');
    var rangeObj = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'Before', isVisible: true },
        showButtons: true,
        type: 'Range',
        orientation: 'Vertical',
        ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true }
    });
    rangeObj.appendTo('#rangeslidert');
    var defaultObj1 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'After', isVisible: true },
        showButtons: true,
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
        orientation: 'Vertical'
    });
    defaultObj1.appendTo('#slidetoolafter');
    var rangeObj1 = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'After', isVisible: true },
        showButtons: true,
        ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
        type: 'Range',
        orientation: 'Vertical'
    });
    rangeObj1.appendTo('#rangeslidertafter');
});

define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Drag Interval Slider sample
     */
    var slider01 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 60],
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        type: 'Range'
    });
    slider01.appendTo('#slider01');
    var slider02 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 60],
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        tooltip: { isVisible: true },
        type: 'Range'
    });
    slider02.appendTo('#slider02');
    var slider03 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 60],
        ticks: { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true },
        tooltip: { isVisible: true },
        type: 'Range',
        enableRtl: true
    });
    slider03.appendTo('#slider03');
    var slider04 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 60],
        ticks: { placement: 'Both', largeStep: 25, smallStep: 5, showSmallTicks: true },
        type: 'Range',
        orientation: 'Vertical'
    });
    slider04.appendTo('#slider04');
    var slider05 = new slider_1.Slider({
        min: 0,
        max: 100,
        value: [30, 60],
        ticks: { placement: 'Both', largeStep: 25, smallStep: 5, showSmallTicks: true },
        tooltip: { isVisible: true },
        type: 'Range',
        orientation: 'Vertical'
    });
    slider05.appendTo('#slider05');
});

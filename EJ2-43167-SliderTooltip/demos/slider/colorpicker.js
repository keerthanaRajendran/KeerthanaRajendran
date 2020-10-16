define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
    var slider = new slider_1.Slider({
        max: 255,
        type: 'MinRange',
    });
    slider.appendTo('#slider');
    var slider1 = new slider_1.Slider({
        max: 255,
        type: 'MinRange',
    });
    slider1.appendTo('#slider-02');
    var slider2 = new slider_1.Slider({
        max: 255,
        type: 'MinRange',
    });
    slider2.appendTo('#slider-03');
    slider.change = changeEvent;
    slider1.change = changeEvent;
    slider2.change = changeEvent;
    function changeEvent() {
        var rgb = document.getElementById('#color');
        rgb.style.backgroundColor = 'rgb(' + slider.value + ',' + slider1.value + ',' + slider2.value + ')';
    }
});

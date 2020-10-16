define(["require", "exports", "../../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *  Slider with RTL
     */
    var slider = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 45,
        enableRtl: true
    });
    slider.appendTo('#slider');
    /**
     *  Range slider with RTL
     */
    var slider1 = new slider_1.Slider({
        value: [25, 40],
        type: 'Range',
        enableRtl: true
    });
    slider1.appendTo('#slider-02');
    /**
     *  MinRange Slider with RTL
     */
    var slider2 = new slider_1.Slider({
        type: 'MinRange',
        value: 22,
        enableRtl: true
    });
    slider2.appendTo('#slider-03');
    var button = new ej2_buttons_1.Button();
    button.appendTo('#bothticks');
    var button1 = new ej2_buttons_1.Button();
    button1.appendTo('#beforeticks');
    var button2 = new ej2_buttons_1.Button();
    button2.appendTo('#afterticks');
    var hstyle = document.getElementsByClassName("e-slider-container");
    for (var i = 0; i < hstyle.length; i++) {
        hstyle[i].classList.add("e-slider-hover");
    }
    // button click event handler
    button.element.onclick = function () {
        slider.showButtons = true;
        slider1.showButtons = true;
        slider2.showButtons = true;
        slider.tooltip = { placement: 'After', isVisible: true };
        slider1.tooltip = { placement: 'After', isVisible: true };
        slider2.tooltip = { placement: 'After', isVisible: true };
        slider.ticks = { placement: 'Both', largeStep: 15, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'Both', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true };
    };
    button1.element.onclick = function () {
        slider.tooltip = { placement: 'Before', isVisible: true };
        slider1.tooltip = { placement: 'Before', isVisible: true };
        slider2.tooltip = { placement: 'Before', isVisible: true };
        slider.ticks = { placement: 'Before', largeStep: 15, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'Before', largeStep: 10, smallStep: 5, showSmallTicks: true };
    };
    button2.element.onclick = function () {
        slider.ticks = { placement: 'After', largeStep: 15, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'After', largeStep: 10, smallStep: 5, showSmallTicks: true };
    };
});

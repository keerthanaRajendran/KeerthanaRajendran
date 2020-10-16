define(["require", "exports", "../../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
    var slider = new slider_1.Slider({
        min: 0,
        max: 100,
        value: 45,
        tooltip: { placement: 'Before', isVisible: true }
    });
    slider.appendTo('#slider');
    /**
     *  Slider with Range sample
     */
    var slider1 = new slider_1.Slider({
        value: [25, 40],
        type: 'Range',
        tooltip: { placement: 'Before', isVisible: true }
    });
    /**
     * Slider with minrange sample
     */
    slider1.appendTo('#slider-02');
    var slider2 = new slider_1.Slider({
        type: 'MinRange',
        value: 32,
        tooltip: { placement: 'Before', isVisible: true }
    });
    slider2.appendTo('#slider-03');
    var button = new ej2_buttons_1.Button();
    button.appendTo('#showbutton');
    var button1 = new ej2_buttons_1.Button();
    button1.appendTo('#bothticks');
    var button2 = new ej2_buttons_1.Button();
    button2.appendTo('#disable');
    var button3 = new ej2_buttons_1.Button();
    button3.appendTo('#afterticks');
    var button4 = new ej2_buttons_1.Button();
    button4.appendTo('#beforeticks');
    var hstyle = document.getElementsByClassName("e-slider-container");
    for (var i = 0; i < hstyle.length; i++) {
        hstyle[i].classList.add("e-slider-hover");
    }
    // button click event handler
    button.element.onclick = function () {
        slider.showButtons = true;
        slider1.showButtons = true;
        slider2.showButtons = true;
    };
    button1.element.onclick = function () {
        slider.ticks = { placement: 'Both', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'Both', largeStep: 15, smallStep: 5, showSmallTicks: true };
    };
    button2.element.onclick = function () {
        slider.enabled = false;
        slider1.enabled = false;
        slider2.enabled = false;
    };
    button3.element.onclick = function () {
        slider.ticks = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'After', largeStep: 10, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'After', largeStep: 15, smallStep: 5, showSmallTicks: true };
    };
    button4.element.onclick = function () {
        slider.ticks = { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'Before', largeStep: 10, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'Before', largeStep: 15, smallStep: 5, showSmallTicks: true };
        slider.tooltip = { placement: 'After', isVisible: true };
        slider1.tooltip = { placement: 'After', isVisible: true };
        slider2.tooltip = { placement: 'After', isVisible: true };
    };
});

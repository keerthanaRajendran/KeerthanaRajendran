define(["require", "exports", "../../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider Orientation
     */
    var defaultObj = new slider_1.Slider({
        value: 10,
        tooltip: { placement: 'Before', isVisible: true },
        orientation: 'Vertical',
    });
    defaultObj.appendTo('#default');
    /**
     *  Range Slider with orientation
     */
    var rangeObj = new slider_1.Slider({
        value: [10, 30],
        tooltip: { placement: 'Before', isVisible: true },
        type: 'Range',
        orientation: 'Vertical',
    });
    rangeObj.appendTo('#rangeslider');
    /**
     *  MinRange Slider with orientation
     */
    var minrangetObj = new slider_1.Slider({
        type: 'MinRange',
        value: 29,
        tooltip: { placement: 'Before', isVisible: true },
        orientation: 'Vertical'
    });
    minrangetObj.appendTo('#minrange');
    var button = new ej2_buttons_1.Button();
    button.appendTo('#showbutton');
    var button1 = new ej2_buttons_1.Button();
    button1.appendTo('#bothticks');
    var button2 = new ej2_buttons_1.Button();
    button2.appendTo('#beforeticks');
    var button3 = new ej2_buttons_1.Button();
    button3.appendTo('#afterticks');
    var button4 = new ej2_buttons_1.Button();
    button4.appendTo('#disable');
    var hstyle = document.getElementsByClassName("e-slider-container");
    for (var i = 0; i < hstyle.length; i++) {
        hstyle[i].classList.add("e-slider-hover");
    }
    // button click event handler
    button.element.onclick = function () {
        defaultObj.showButtons = true;
        rangeObj.showButtons = true;
        minrangetObj.showButtons = true;
    };
    button1.element.onclick = function () {
        defaultObj.ticks = { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true };
        rangeObj.ticks = { placement: 'Both', largeStep: 20, smallStep: 5, showSmallTicks: true };
        minrangetObj.ticks = { placement: 'Both', largeStep: 15, smallStep: 5, showSmallTicks: true };
        defaultObj.tooltip = { placement: 'After', isVisible: true };
        rangeObj.tooltip = { placement: 'After', isVisible: true };
        minrangetObj.tooltip = { placement: 'After', isVisible: true };
    };
    button2.element.onclick = function () {
        defaultObj.ticks = { placement: 'Before', largeStep: 10, smallStep: 5, showSmallTicks: true };
        rangeObj.ticks = { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
        minrangetObj.ticks = { placement: 'Before', largeStep: 15, smallStep: 5, showSmallTicks: true };
    };
    button3.element.onclick = function () {
        defaultObj.ticks = { placement: 'After', largeStep: 10, smallStep: 5, showSmallTicks: true };
        rangeObj.ticks = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
        minrangetObj.ticks = { placement: 'After', largeStep: 15, smallStep: 5, showSmallTicks: true };
    };
    button4.element.onclick = function () {
        defaultObj.enabled = false;
        rangeObj.enabled = false;
        minrangetObj.enabled = false;
    };
});

define(["require", "exports", "../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
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
        value: [25, 65],
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
    button.appendTo('#ticks');
    var toggleBtn = new ej2_buttons_1.Button({ isToggle: true });
    toggleBtn.appendTo('#disable');
    var button1 = new ej2_buttons_1.Button();
    button1.appendTo('#customvalue');
    var button9 = new ej2_buttons_1.Button();
    button9.appendTo('#customvaluewithlimit');
    var button5 = new ej2_buttons_1.Button();
    button5.appendTo('#material');
    var button6 = new ej2_buttons_1.Button();
    button5.appendTo('#fabric');
    var button7 = new ej2_buttons_1.Button();
    button7.appendTo('#bootstrap');
    // button click event handler
    button.element.onclick = function () {
        slider.showButtons = true;
        slider1.showButtons = true;
        slider2.showButtons = true;
        slider.tooltip = { placement: 'After', isVisible: true, showOn: 'Always' };
        slider1.tooltip = { placement: 'Before', isVisible: true, showOn: 'Always' };
        slider2.tooltip = { placement: 'After', isVisible: true, showOn: 'Always' };
        slider.ticks = { placement: 'Both', largeStep: 15, smallStep: 5, showSmallTicks: true };
        slider1.ticks = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
        slider2.ticks = { placement: 'Before', largeStep: 10, smallStep: 5, showSmallTicks: true };
    };
    button1.element.onclick = function () {
        slider.enabled = true;
        slider.customValues = [10, 9, 90, 999, 908, 45, 89, 77, 78];
        slider.value = 2;
        slider1.enabled = true;
        slider1.customValues = ["red", "yellow", "white", "green", "black", "pink"];
        slider1.value = [1, 4];
        slider2.enabled = true;
        slider2.customValues = [2, 3, 6, 7, 9, 0, 37, 99, 20];
        slider2.value = [3];
    };
    button9.element.onclick = function () {
        slider.limits = { enabled: true, minStart: 2, minEnd: 4, maxStart: 5, maxEnd: 7 },
            slider1.limits = { enabled: true, minStart: 2, minEnd: 3, maxStart: 4, maxEnd: 5 },
            slider2.limits = { enabled: true, minEnd: 8 };
    };
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            slider.enabled = false;
            slider1.enabled = false;
            slider2.enabled = false;
        }
        else {
            slider.enabled = true;
            slider1.enabled = true;
            slider2.enabled = true;
        }
    };
    document.getElementById('material').onclick = function (e) {
        document.getElementById("theme").setAttribute('href', '../../styles/slider/material.css');
        document.getElementById("theme1").setAttribute('href', '../../node_modules/@syncfusion/ej2-popups/styles/material.css');
        document.getElementById("theme2").setAttribute('href', '../../node_modules/@syncfusion/ej2-buttons/styles/material.css');
        refresh();
    };
    document.getElementById('fabric').onclick = function (e) {
        document.getElementById("theme").setAttribute('href', '../../styles/slider/fabric.css');
        document.getElementById("theme1").setAttribute('href', '../../node_modules/@syncfusion/ej2-popups/styles/fabric.css');
        document.getElementById("theme2").setAttribute('href', '../../node_modules/@syncfusion/ej2-buttons/styles/fabric.css');
        refresh();
    };
    document.getElementById('bootstrap').onclick = function (e) {
        document.getElementById("theme").setAttribute('href', '../../styles/slider/bootstrap.css');
        document.getElementById("theme1").setAttribute('href', '../../node_modules/@syncfusion/ej2-popups/styles/bootstrap.css');
        document.getElementById("theme2").setAttribute('href', '../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap.css');
        refresh();
    };
    function refresh() {
        slider.refresh();
        slider1.refresh();
        slider2.refresh();
    }
});

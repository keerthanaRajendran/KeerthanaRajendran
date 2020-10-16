define(["require", "exports", "../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider Orientation
     */
    var defaultObj = new slider_1.Slider({
        value: 30,
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        orientation: 'Vertical',
    });
    defaultObj.appendTo('#default');
    /**
     *  Range Slider with orientation
     */
    var rangeObj = new slider_1.Slider({
        value: [30, 60],
        tooltip: { placement: 'After', isVisible: true, showOn: 'Always' },
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
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        orientation: 'Vertical'
    });
    minrangetObj.appendTo('#minrange');
    var button1 = new ej2_buttons_1.Button();
    button1.appendTo('#ticks');
    var toggleBtn = new ej2_buttons_1.Button({ isToggle: true });
    toggleBtn.appendTo('#disable');
    var button8 = new ej2_buttons_1.Button();
    button8.appendTo('#customvalue');
    var button9 = new ej2_buttons_1.Button();
    button9.appendTo('#customvaluewithlimit');
    var button5 = new ej2_buttons_1.Button();
    button5.appendTo('#material');
    var button6 = new ej2_buttons_1.Button();
    button6.appendTo('#fabric');
    var button7 = new ej2_buttons_1.Button();
    button7.appendTo('#bootstrap');
    button1.element.onclick = function () {
        defaultObj.showButtons = true;
        rangeObj.showButtons = true;
        minrangetObj.showButtons = true;
        defaultObj.ticks = { placement: 'Both', largeStep: 10, smallStep: 5, showSmallTicks: true };
        rangeObj.ticks = { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true };
        minrangetObj.ticks = { placement: 'Before', largeStep: 15, smallStep: 5, showSmallTicks: true };
    };
    button8.element.onclick = function () {
        defaultObj.customValues = [10, 9, 90, 999, 908, 45, 89, 77, 78];
        defaultObj.value = 2;
        defaultObj.enabled = true;
        rangeObj.customValues = [1, 3, 5, 6, 88, 90, 2, 4, 7, 9];
        rangeObj.value = [2, 7];
        rangeObj.enabled = true;
        minrangetObj.customValues = [2, 3, 6, 7, 9, 0, 37, 99, 20];
        minrangetObj.value = [3];
        minrangetObj.enabled = true;
    };
    button9.element.onclick = function () {
        defaultObj.limits = { enabled: true, minStart: 2, minEnd: 4, maxStart: 5, maxEnd: 7 },
            rangeObj.limits = { enabled: true, minStart: 2, minEnd: 3, maxStart: 4, maxEnd: 5 },
            minrangetObj.limits = { enabled: true, minEnd: 8 };
    };
    toggleBtn.element.onclick = function () {
        if (toggleBtn.element.classList.contains('e-active')) {
            defaultObj.enabled = false;
            rangeObj.enabled = false;
            minrangetObj.enabled = false;
        }
        else {
            defaultObj.enabled = true;
            rangeObj.enabled = true;
            minrangetObj.enabled = true;
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
        defaultObj.refresh();
        rangeObj.refresh();
        minrangetObj.refresh();
    }
});

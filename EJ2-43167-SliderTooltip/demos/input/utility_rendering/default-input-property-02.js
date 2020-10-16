define(["require", "exports", "../../../src/input/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Bigger Input
    var inputObj10;
    var element10;
    element10 = document.createElement('input');
    document.getElementsByClassName('control-panel-bigger')[0].appendChild(element10);
    inputObj10 = index_1.Input.createInput({
        element: element10,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj10.container.classList.add('e-bigger');
    var element11;
    var inputObj11;
    element11 = document.createElement('input');
    element11.value = 'Basic Input';
    document.getElementsByClassName('control-panel-bigger')[0].appendChild(element11);
    inputObj11 = index_1.Input.createInput({
        element: element11,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj11.container.classList.add('e-bigger');
    var element12;
    var inputObj12;
    element12 = document.createElement('input');
    element12.value = 'Clear Input';
    document.getElementsByClassName('control-panel-bigger')[0].appendChild(element12);
    inputObj12 = index_1.Input.createInput({
        element: element12,
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj12.container.classList.add('e-bigger');
    inputObj12.container.classList.add('e-static-clear');
    var element13;
    var inputObj13;
    element13 = document.createElement('input');
    document.getElementsByClassName('control-panel-bigger')[0].appendChild(element13);
    inputObj13 = index_1.Input.createInput({
        element: element13,
        properties: {
            placeholder: 'Input with Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj13.container);
    inputObj13.container.classList.add('e-bigger');
    var element23;
    var inputObj23;
    element23 = document.createElement('input');
    document.getElementsByClassName('control-panel-bigger')[0].appendChild(element23);
    inputObj23 = index_1.Input.createInput({
        element: element23,
        properties: {
            placeholder: 'Input with Multiple Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj23.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj23.container);
    inputObj23.container.classList.add('e-bigger');
    // Small Bigger Input
    var inputObj15;
    var element15;
    element15 = document.createElement('input');
    document.getElementsByClassName('control-panel-small-bigger')[0].appendChild(element15);
    inputObj15 = index_1.Input.createInput({
        element: element15,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj15.container.classList.add('e-bigger');
    inputObj15.container.classList.add('e-small');
    var element16;
    var inputObj16;
    element16 = document.createElement('input');
    element16.value = 'Basic Input';
    document.getElementsByClassName('control-panel-small-bigger')[0].appendChild(element16);
    inputObj16 = index_1.Input.createInput({
        element: element16,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj16.container.classList.add('e-bigger');
    inputObj16.container.classList.add('e-small');
    var element17;
    var inputObj17;
    element17 = document.createElement('input');
    element17.value = 'Clear Input';
    document.getElementsByClassName('control-panel-small-bigger')[0].appendChild(element17);
    inputObj17 = index_1.Input.createInput({
        element: element17,
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj17.container.classList.add('e-bigger');
    inputObj17.container.classList.add('e-small');
    inputObj17.container.classList.add('e-static-clear');
    var element18;
    var inputObj18;
    element18 = document.createElement('input');
    document.getElementsByClassName('control-panel-small-bigger')[0].appendChild(element18);
    inputObj18 = index_1.Input.createInput({
        element: element18,
        properties: {
            placeholder: 'Input with Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj18.container);
    inputObj18.container.classList.add('e-bigger');
    inputObj18.container.classList.add('e-small');
    var element24;
    var inputObj24;
    element24 = document.createElement('input');
    document.getElementsByClassName('control-panel-small-bigger')[0].appendChild(element24);
    inputObj24 = index_1.Input.createInput({
        element: element24,
        properties: {
            placeholder: 'Input with Multiple Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj24.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj24.container);
    inputObj24.container.classList.add('e-bigger');
    inputObj24.container.classList.add('e-small');
    document.getElementById('valuehold').addEventListener("click", function () {
        var txt = document.getElementById('valuetext').value;
        index_1.Input.setValue(txt, element10, "None", false);
        index_1.Input.setValue(txt, element11, "None", false);
        index_1.Input.setValue(txt, element12, "None", true);
        index_1.Input.setValue(txt, element13, "None", false);
        index_1.Input.setValue(txt, element15, "None", false);
        index_1.Input.setValue(txt, element16, "None", false);
        index_1.Input.setValue(txt, element17, "None", true);
        index_1.Input.setValue(txt, element18, "None", false);
        index_1.Input.setValue(txt, element23, "None", false);
        index_1.Input.setValue(txt, element24, "None", false);
    });
    document.getElementById('placehold').addEventListener("click", function () {
        var txt = document.getElementById('placetext').value;
        index_1.Input.setPlaceholder(txt, element10);
        index_1.Input.setPlaceholder(txt, element11);
        index_1.Input.setPlaceholder(txt, element12);
        index_1.Input.setPlaceholder(txt, element13);
        index_1.Input.setPlaceholder(txt, element15);
        index_1.Input.setPlaceholder(txt, element16);
        index_1.Input.setPlaceholder(txt, element17);
        index_1.Input.setPlaceholder(txt, element18);
        index_1.Input.setPlaceholder(txt, element23);
        index_1.Input.setPlaceholder(txt, element24);
    });
    document.getElementById('setenable').addEventListener("click", function () {
        index_1.Input.setEnabled(true, element10, 'Always', inputObj10.container);
        index_1.Input.setEnabled(true, element11, 'Always', inputObj11.container);
        index_1.Input.setEnabled(true, element12, 'Always', inputObj12.container);
        index_1.Input.setEnabled(true, element13, 'Always', inputObj13.container);
        index_1.Input.setEnabled(true, element15, 'Always', inputObj15.container);
        index_1.Input.setEnabled(true, element16, 'Always', inputObj16.container);
        index_1.Input.setEnabled(true, element17, 'Always', inputObj17.container);
        index_1.Input.setEnabled(true, element18, 'Always', inputObj18.container);
        index_1.Input.setEnabled(true, element23, 'Always', inputObj23.container);
        index_1.Input.setEnabled(true, element24, 'Always', inputObj24.container);
    });
    document.getElementById('clearenable').addEventListener("click", function () {
        index_1.Input.setEnabled(false, element10, 'Always', inputObj10.container);
        index_1.Input.setEnabled(false, element11, 'Always', inputObj11.container);
        index_1.Input.setEnabled(false, element12, 'Always', inputObj12.container);
        index_1.Input.setEnabled(false, element13, 'Always', inputObj13.container);
        index_1.Input.setEnabled(false, element15, 'Always', inputObj15.container);
        index_1.Input.setEnabled(false, element16, 'Always', inputObj16.container);
        index_1.Input.setEnabled(false, element17, 'Always', inputObj17.container);
        index_1.Input.setEnabled(false, element18, 'Always', inputObj18.container);
        index_1.Input.setEnabled(false, element23, 'Always', inputObj23.container);
        index_1.Input.setEnabled(false, element24, 'Always', inputObj24.container);
    });
    document.getElementById('setread').addEventListener("click", function () {
        index_1.Input.setReadonly(true, element10);
        index_1.Input.setReadonly(true, element11);
        index_1.Input.setReadonly(true, element12);
        index_1.Input.setReadonly(true, element13);
        index_1.Input.setReadonly(true, element15);
        index_1.Input.setReadonly(true, element16);
        index_1.Input.setReadonly(true, element17);
        index_1.Input.setReadonly(true, element18);
        index_1.Input.setReadonly(true, element23);
        index_1.Input.setReadonly(true, element24);
    });
    document.getElementById('clearread').addEventListener("click", function () {
        index_1.Input.setReadonly(false, element10);
        index_1.Input.setReadonly(false, element11);
        index_1.Input.setReadonly(false, element12);
        index_1.Input.setReadonly(false, element13);
        index_1.Input.setReadonly(false, element15);
        index_1.Input.setReadonly(false, element16);
        index_1.Input.setReadonly(false, element17);
        index_1.Input.setReadonly(false, element18);
        index_1.Input.setReadonly(false, element23);
        index_1.Input.setReadonly(false, element24);
    });
    document.getElementById('setrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(true, [inputObj10.container]);
        index_1.Input.setEnableRtl(true, [inputObj11.container]);
        index_1.Input.setEnableRtl(true, [inputObj12.container]);
        index_1.Input.setEnableRtl(true, [inputObj13.container]);
        index_1.Input.setEnableRtl(true, [inputObj15.container]);
        index_1.Input.setEnableRtl(true, [inputObj16.container]);
        index_1.Input.setEnableRtl(true, [inputObj17.container]);
        index_1.Input.setEnableRtl(true, [inputObj18.container]);
        index_1.Input.setEnableRtl(true, [inputObj23.container]);
        index_1.Input.setEnableRtl(true, [inputObj24.container]);
    });
    document.getElementById('clearrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(false, [inputObj10.container]);
        index_1.Input.setEnableRtl(false, [inputObj11.container]);
        index_1.Input.setEnableRtl(false, [inputObj12.container]);
        index_1.Input.setEnableRtl(false, [inputObj13.container]);
        index_1.Input.setEnableRtl(false, [inputObj15.container]);
        index_1.Input.setEnableRtl(false, [inputObj16.container]);
        index_1.Input.setEnableRtl(false, [inputObj17.container]);
        index_1.Input.setEnableRtl(false, [inputObj18.container]);
        index_1.Input.setEnableRtl(false, [inputObj23.container]);
        index_1.Input.setEnableRtl(false, [inputObj24.container]);
    });
});

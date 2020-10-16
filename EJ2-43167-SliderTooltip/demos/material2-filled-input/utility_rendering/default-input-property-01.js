define(["require", "exports", "../../../src/input/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inputObj;
    var inputO = index_1.Input;
    var element;
    element = document.createElement('input');
    document.getElementsByClassName('control-panel-small')[0].appendChild(element);
    inputObj = index_1.Input.createInput({
        element: element,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj.container.classList.add('e-small');
    inputObj.container.classList.add('e-filled');
    var element1;
    var inputObj1;
    element1 = document.createElement('input');
    element1.value = 'Basic Input';
    document.getElementsByClassName('control-panel-small')[0].appendChild(element1);
    inputObj1 = index_1.Input.createInput({
        element: element1,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj1.container.classList.add('e-small');
    inputObj1.container.classList.add('e-filled');
    var element2;
    var inputObj2;
    element2 = document.createElement('input');
    element2.value = 'Clear Input';
    document.getElementsByClassName('control-panel-small')[0].appendChild(element2);
    inputObj2 = index_1.Input.createInput({
        element: element2,
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj2.container.classList.add('e-small');
    inputObj2.container.classList.add('e-static-clear');
    inputObj2.container.classList.add('e-filled');
    var element3;
    var inputObj3;
    element3 = document.createElement('input');
    document.getElementsByClassName('control-panel-small')[0].appendChild(element3);
    inputObj3 = index_1.Input.createInput({
        element: element3,
        properties: {
            placeholder: 'Input with Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj3.container);
    inputObj3.container.classList.add('e-small');
    inputObj3.container.classList.add('e-filled');
    var element21;
    var inputObj21;
    element21 = document.createElement('input');
    document.getElementsByClassName('control-panel-small')[0].appendChild(element21);
    inputObj21 = index_1.Input.createInput({
        element: element21,
        properties: {
            placeholder: 'Input with Multiple Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj21.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj21.container);
    inputObj21.container.classList.add('e-small');
    inputObj21.container.classList.add('e-filled');
    // Normal Input
    var inputObj5;
    var inputO5 = index_1.Input;
    var element5;
    element5 = document.createElement('input');
    document.getElementsByClassName('control-panel-normal')[0].appendChild(element5);
    inputObj5 = index_1.Input.createInput({
        element: element5,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj5.container.classList.add('e-filled');
    var element6;
    var inputObj6;
    element6 = document.createElement('input');
    element6.value = 'Basic Input';
    document.getElementsByClassName('control-panel-normal')[0].appendChild(element6);
    inputObj6 = index_1.Input.createInput({
        element: element6,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj6.container.classList.add('e-filled');
    var element7;
    var inputObj7;
    element7 = document.createElement('input');
    element7.value = 'Clear Input';
    document.getElementsByClassName('control-panel-normal')[0].appendChild(element7);
    inputObj7 = index_1.Input.createInput({
        element: element7,
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj7.container.classList.add('e-static-clear');
    inputObj7.container.classList.add('e-filled');
    var element8;
    var inputObj8;
    element8 = document.createElement('input');
    document.getElementsByClassName('control-panel-normal')[0].appendChild(element8);
    inputObj8 = index_1.Input.createInput({
        element: element8,
        properties: {
            placeholder: 'Input with Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj8.container);
    inputObj8.container.classList.add('e-filled');
    var element22;
    var inputObj22;
    element22 = document.createElement('input');
    document.getElementsByClassName('control-panel-normal')[0].appendChild(element22);
    inputObj22 = index_1.Input.createInput({
        element: element22,
        properties: {
            placeholder: 'Input with Multiple Icon'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);
    inputObj22.container.classList.add('e-filled');
    document.getElementById('placehold').addEventListener("click", function () {
        var txt = document.getElementById('placetext').value;
        index_1.Input.setPlaceholder(txt, element);
        index_1.Input.setPlaceholder(txt, element1);
        index_1.Input.setPlaceholder(txt, element2);
        index_1.Input.setPlaceholder(txt, element3);
        index_1.Input.setPlaceholder(txt, element5);
        index_1.Input.setPlaceholder(txt, element6);
        index_1.Input.setPlaceholder(txt, element7);
        index_1.Input.setPlaceholder(txt, element8);
        index_1.Input.setPlaceholder(txt, element21);
        index_1.Input.setPlaceholder(txt, element22);
    });
    document.getElementById('valuehold').addEventListener("click", function () {
        var txt = document.getElementById('valuetext').value;
        index_1.Input.setValue(txt, element, "None", false);
        index_1.Input.setValue(txt, element1, "None", false);
        index_1.Input.setValue(txt, element2, "None", true);
        index_1.Input.setValue(txt, element3, "None", false);
        index_1.Input.setValue(txt, element5, "None", false);
        index_1.Input.setValue(txt, element6, "None", false);
        index_1.Input.setValue(txt, element7, "None", true);
        index_1.Input.setValue(txt, element8, "None", false);
        index_1.Input.setValue(txt, element21, "None", false);
        index_1.Input.setValue(txt, element22, "None", false);
    });
    document.getElementById('setenable').addEventListener("click", function () {
        index_1.Input.setEnabled(true, element, 'Always', inputObj.container);
        index_1.Input.setEnabled(true, element1, 'Always', inputObj1.container);
        index_1.Input.setEnabled(true, element2, 'Always', inputObj2.container);
        index_1.Input.setEnabled(true, element3, 'Always', inputObj3.container);
        index_1.Input.setEnabled(true, element5, 'Always', inputObj5.container);
        index_1.Input.setEnabled(true, element6, 'Always', inputObj6.container);
        index_1.Input.setEnabled(true, element7, 'Always', inputObj7.container);
        index_1.Input.setEnabled(true, element8, 'Always', inputObj8.container);
        index_1.Input.setEnabled(true, element21, 'Always', inputObj21.container);
        index_1.Input.setEnabled(true, element22, 'Always', inputObj22.container);
    });
    document.getElementById('clearenable').addEventListener("click", function () {
        index_1.Input.setEnabled(false, element, 'Always', inputObj.container);
        index_1.Input.setEnabled(false, element1, 'Always', inputObj1.container);
        index_1.Input.setEnabled(false, element2, 'Always', inputObj2.container);
        index_1.Input.setEnabled(false, element3, 'Always', inputObj3.container);
        index_1.Input.setEnabled(false, element5, 'Always', inputObj5.container);
        index_1.Input.setEnabled(false, element6, 'Always', inputObj6.container);
        index_1.Input.setEnabled(false, element7, 'Always', inputObj7.container);
        index_1.Input.setEnabled(false, element8, 'Always', inputObj8.container);
        index_1.Input.setEnabled(false, element21, 'Always', inputObj21.container);
        index_1.Input.setEnabled(false, element22, 'Always', inputObj22.container);
    });
    document.getElementById('setread').addEventListener("click", function () {
        index_1.Input.setReadonly(true, element);
        index_1.Input.setReadonly(true, element1);
        index_1.Input.setReadonly(true, element2);
        index_1.Input.setReadonly(true, element3);
        index_1.Input.setReadonly(true, element5);
        index_1.Input.setReadonly(true, element6);
        index_1.Input.setReadonly(true, element7);
        index_1.Input.setReadonly(true, element8);
        index_1.Input.setReadonly(true, element21);
        index_1.Input.setReadonly(true, element22);
    });
    document.getElementById('clearread').addEventListener("click", function () {
        index_1.Input.setReadonly(false, element);
        index_1.Input.setReadonly(false, element1);
        index_1.Input.setReadonly(false, element2);
        index_1.Input.setReadonly(false, element3);
        index_1.Input.setReadonly(false, element5);
        index_1.Input.setReadonly(false, element6);
        index_1.Input.setReadonly(false, element7);
        index_1.Input.setReadonly(false, element8);
        index_1.Input.setReadonly(false, element21);
        index_1.Input.setReadonly(false, element22);
    });
    document.getElementById('setrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(true, [inputObj.container]);
        index_1.Input.setEnableRtl(true, [inputObj1.container]);
        index_1.Input.setEnableRtl(true, [inputObj2.container]);
        index_1.Input.setEnableRtl(true, [inputObj3.container]);
        index_1.Input.setEnableRtl(true, [inputObj5.container]);
        index_1.Input.setEnableRtl(true, [inputObj6.container]);
        index_1.Input.setEnableRtl(true, [inputObj7.container]);
        index_1.Input.setEnableRtl(true, [inputObj8.container]);
        index_1.Input.setEnableRtl(true, [inputObj21.container]);
        index_1.Input.setEnableRtl(true, [inputObj22.container]);
    });
    document.getElementById('clearrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(false, [inputObj.container]);
        index_1.Input.setEnableRtl(false, [inputObj1.container]);
        index_1.Input.setEnableRtl(false, [inputObj2.container]);
        index_1.Input.setEnableRtl(false, [inputObj3.container]);
        index_1.Input.setEnableRtl(false, [inputObj5.container]);
        index_1.Input.setEnableRtl(false, [inputObj6.container]);
        index_1.Input.setEnableRtl(false, [inputObj7.container]);
        index_1.Input.setEnableRtl(false, [inputObj8.container]);
        index_1.Input.setEnableRtl(false, [inputObj21.container]);
        index_1.Input.setEnableRtl(false, [inputObj22.container]);
    });
});

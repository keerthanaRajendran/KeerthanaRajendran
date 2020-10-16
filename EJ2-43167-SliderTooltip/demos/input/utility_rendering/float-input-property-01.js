define(["require", "exports", "../../../src/input/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inputObj;
    var inputO = index_1.Input;
    var element;
    element = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-01')[0].appendChild(element);
    inputObj = index_1.Input.createInput({
        floatLabelType: "Auto",
        element: element,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj.container.classList.add('e-small');
    var inputObj20;
    var element20;
    element20 = document.createElement('input');
    element20.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-small-02')[0].appendChild(element20);
    inputObj20 = index_1.Input.createInput({
        floatLabelType: "Auto",
        element: element20,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj20.container.classList.add('e-small');
    var element1;
    var inputObj1;
    element1 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-03')[0].appendChild(element1);
    inputObj1 = index_1.Input.createInput({
        floatLabelType: "Always",
        element: element1,
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj1.container.classList.add('e-small');
    var element2;
    var inputObj2;
    element2 = document.createElement('input');
    element2.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-small-04')[0].appendChild(element2);
    inputObj2 = index_1.Input.createInput({
        element: element2,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj2.container.classList.add('e-small');
    inputObj2.container.classList.add('e-static-clear');
    var element3;
    var inputObj3;
    element3 = document.createElement('input');
    element3.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-small-05')[0].appendChild(element3);
    inputObj3 = index_1.Input.createInput({
        element: element3,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj3.container);
    inputObj3.container.classList.add('e-small');
    var element4;
    var inputObj4;
    element4 = document.createElement('input');
    element4.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-small-06')[0].appendChild(element4);
    inputObj4 = index_1.Input.createInput({
        element: element4,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj4.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj4.container);
    inputObj4.container.classList.add('e-small');
    // Normal Input
    var inputObj5;
    var element5;
    element5 = document.createElement('input');
    document.getElementsByClassName('inner-panel-normal-01')[0].appendChild(element5);
    inputObj5 = index_1.Input.createInput({
        element: element5,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    var inputObj21;
    var element21;
    element21 = document.createElement('input');
    element21.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-normal-02')[0].appendChild(element21);
    inputObj21 = index_1.Input.createInput({
        element: element21,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    var element6;
    var inputObj6;
    element6 = document.createElement('input');
    document.getElementsByClassName('inner-panel-normal-03')[0].appendChild(element6);
    inputObj6 = index_1.Input.createInput({
        element: element6,
        floatLabelType: "Always",
        properties: {
            placeholder: 'Float Always'
        }
    });
    var element7;
    var inputObj7;
    element7 = document.createElement('input');
    element7.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-normal-04')[0].appendChild(element7);
    inputObj7 = index_1.Input.createInput({
        element: element7,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj7.container.classList.add('e-static-clear');
    var element8;
    var inputObj8;
    element8 = document.createElement('input');
    element8.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-normal-05')[0].appendChild(element8);
    inputObj8 = index_1.Input.createInput({
        element: element8,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj8.container);
    var element9;
    var inputObj9;
    element9 = document.createElement('input');
    element9.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-normal-06')[0].appendChild(element9);
    inputObj9 = index_1.Input.createInput({
        element: element9,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj9.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj9.container);
    document.getElementById('valuehold').addEventListener("click", function () {
        var txt = document.getElementById('valuetext').value;
        index_1.Input.setValue(txt, element, "Auto", false);
        index_1.Input.setValue(txt, element1, "Always", false);
        index_1.Input.setValue(txt, element2, "Auto", true);
        index_1.Input.setValue(txt, element3, "Auto", false);
        index_1.Input.setValue(txt, element4, "Auto", false);
        index_1.Input.setValue(txt, element5, "Auto", false);
        index_1.Input.setValue(txt, element6, "Always", false);
        index_1.Input.setValue(txt, element7, "Auto", true);
        index_1.Input.setValue(txt, element8, "Auto", false);
        index_1.Input.setValue(txt, element9, "Auto", false);
        index_1.Input.setValue(txt, element20, "Auto", false);
        index_1.Input.setValue(txt, element21, "Auto", false);
    });
    document.getElementById('placehold').addEventListener("click", function () {
        var txt = document.getElementById('placetext').value;
        index_1.Input.setPlaceholder(txt, element);
        index_1.Input.setPlaceholder(txt, element1);
        index_1.Input.setPlaceholder(txt, element2);
        index_1.Input.setPlaceholder(txt, element3);
        index_1.Input.setPlaceholder(txt, element4);
        index_1.Input.setPlaceholder(txt, element5);
        index_1.Input.setPlaceholder(txt, element6);
        index_1.Input.setPlaceholder(txt, element7);
        index_1.Input.setPlaceholder(txt, element8);
        index_1.Input.setPlaceholder(txt, element9);
        index_1.Input.setPlaceholder(txt, element20);
        index_1.Input.setPlaceholder(txt, element21);
    });
    document.getElementById('setenable').addEventListener("click", function () {
        index_1.Input.setEnabled(true, element, 'Auto', inputObj.container);
        index_1.Input.setEnabled(true, element1, 'Auto', inputObj1.container);
        index_1.Input.setEnabled(true, element2, 'Auto', inputObj2.container);
        index_1.Input.setEnabled(true, element3, 'Auto', inputObj3.container);
        index_1.Input.setEnabled(true, element4, 'Auto', inputObj4.container);
        index_1.Input.setEnabled(true, element5, 'Auto', inputObj5.container);
        index_1.Input.setEnabled(true, element6, 'Auto', inputObj6.container);
        index_1.Input.setEnabled(true, element7, 'Auto', inputObj7.container);
        index_1.Input.setEnabled(true, element8, 'Auto', inputObj8.container);
        index_1.Input.setEnabled(true, element9, 'Auto', inputObj9.container);
        index_1.Input.setEnabled(true, element20, 'Auto', inputObj20.container);
        index_1.Input.setEnabled(true, element21, 'Auto', inputObj21.container);
    });
    document.getElementById('clearenable').addEventListener("click", function () {
        index_1.Input.setEnabled(false, element, 'Auto', inputObj.container);
        index_1.Input.setEnabled(false, element1, 'Auto', inputObj1.container);
        index_1.Input.setEnabled(false, element2, 'Auto', inputObj2.container);
        index_1.Input.setEnabled(false, element3, 'Auto', inputObj3.container);
        index_1.Input.setEnabled(false, element4, 'Auto', inputObj4.container);
        index_1.Input.setEnabled(false, element5, 'Auto', inputObj5.container);
        index_1.Input.setEnabled(false, element6, 'Auto', inputObj6.container);
        index_1.Input.setEnabled(false, element7, 'Auto', inputObj7.container);
        index_1.Input.setEnabled(false, element8, 'Auto', inputObj8.container);
        index_1.Input.setEnabled(false, element9, 'Auto', inputObj9.container);
        index_1.Input.setEnabled(false, element20, 'Auto', inputObj20.container);
        index_1.Input.setEnabled(false, element21, 'Auto', inputObj21.container);
    });
    document.getElementById('setread').addEventListener("click", function () {
        index_1.Input.setReadonly(true, element);
        index_1.Input.setReadonly(true, element1);
        index_1.Input.setReadonly(true, element2);
        index_1.Input.setReadonly(true, element3);
        index_1.Input.setReadonly(true, element4);
        index_1.Input.setReadonly(true, element5);
        index_1.Input.setReadonly(true, element6);
        index_1.Input.setReadonly(true, element7);
        index_1.Input.setReadonly(true, element8);
        index_1.Input.setReadonly(true, element9);
        index_1.Input.setReadonly(true, element20);
        index_1.Input.setReadonly(true, element21);
    });
    document.getElementById('clearread').addEventListener("click", function () {
        index_1.Input.setReadonly(false, element);
        index_1.Input.setReadonly(false, element1);
        index_1.Input.setReadonly(false, element2);
        index_1.Input.setReadonly(false, element3);
        index_1.Input.setReadonly(false, element4);
        index_1.Input.setReadonly(false, element5);
        index_1.Input.setReadonly(false, element6);
        index_1.Input.setReadonly(false, element7);
        index_1.Input.setReadonly(false, element8);
        index_1.Input.setReadonly(false, element9);
        index_1.Input.setReadonly(false, element20);
        index_1.Input.setReadonly(false, element21);
    });
    document.getElementById('setrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(true, [inputObj.container]);
        index_1.Input.setEnableRtl(true, [inputObj1.container]);
        index_1.Input.setEnableRtl(true, [inputObj2.container]);
        index_1.Input.setEnableRtl(true, [inputObj3.container]);
        index_1.Input.setEnableRtl(true, [inputObj4.container]);
        index_1.Input.setEnableRtl(true, [inputObj5.container]);
        index_1.Input.setEnableRtl(true, [inputObj6.container]);
        index_1.Input.setEnableRtl(true, [inputObj7.container]);
        index_1.Input.setEnableRtl(true, [inputObj8.container]);
        index_1.Input.setEnableRtl(true, [inputObj9.container]);
        index_1.Input.setEnableRtl(true, [inputObj20.container]);
        index_1.Input.setEnableRtl(true, [inputObj21.container]);
    });
    document.getElementById('clearrtl').addEventListener("click", function () {
        index_1.Input.setEnableRtl(false, [inputObj.container]);
        index_1.Input.setEnableRtl(false, [inputObj1.container]);
        index_1.Input.setEnableRtl(false, [inputObj2.container]);
        index_1.Input.setEnableRtl(false, [inputObj3.container]);
        index_1.Input.setEnableRtl(false, [inputObj4.container]);
        index_1.Input.setEnableRtl(false, [inputObj5.container]);
        index_1.Input.setEnableRtl(false, [inputObj6.container]);
        index_1.Input.setEnableRtl(false, [inputObj7.container]);
        index_1.Input.setEnableRtl(false, [inputObj8.container]);
        index_1.Input.setEnableRtl(false, [inputObj9.container]);
        index_1.Input.setEnableRtl(false, [inputObj20.container]);
        index_1.Input.setEnableRtl(false, [inputObj21.container]);
    });
});

define(["require", "exports", "../../../src/input/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Bigger Input
    var inputObj10;
    var element10;
    element10 = document.createElement('input');
    document.getElementsByClassName('inner-panel-bigger-01')[0].appendChild(element10);
    inputObj10 = index_1.Input.createInput({
        element: element10,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj10.container.classList.add('e-bigger');
    var inputObj22;
    var element22;
    element22 = document.createElement('input');
    element22.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-bigger-02')[0].appendChild(element22);
    inputObj22 = index_1.Input.createInput({
        element: element22,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj22.container.classList.add('e-bigger');
    var element11;
    var inputObj11;
    element11 = document.createElement('input');
    document.getElementsByClassName('inner-panel-bigger-03')[0].appendChild(element11);
    inputObj11 = index_1.Input.createInput({
        element: element11,
        floatLabelType: "Always",
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj11.container.classList.add('e-bigger');
    var element12;
    var inputObj12;
    element12 = document.createElement('input');
    element12.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-bigger-04')[0].appendChild(element12);
    inputObj12 = index_1.Input.createInput({
        element: element12,
        floatLabelType: "Auto",
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
    element13.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-bigger-05')[0].appendChild(element13);
    inputObj13 = index_1.Input.createInput({
        element: element13,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj13.container);
    inputObj13.container.classList.add('e-bigger');
    var element14;
    var inputObj14;
    element14 = document.createElement('input');
    element14.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-bigger-06')[0].appendChild(element14);
    inputObj14 = index_1.Input.createInput({
        element: element14,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj14.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj14.container);
    inputObj14.container.classList.add('e-bigger');
    // Small Bigger Input
    var inputObj15;
    var element15;
    element15 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-bigger-01')[0].appendChild(element15);
    inputObj15 = index_1.Input.createInput({
        element: element15,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj15.container.classList.add('e-bigger');
    inputObj15.container.classList.add('e-small');
    var inputObj23;
    var element23;
    element23 = document.createElement('input');
    element23.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-small-bigger-02')[0].appendChild(element23);
    inputObj23 = index_1.Input.createInput({
        element: element23,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj23.container.classList.add('e-bigger');
    inputObj23.container.classList.add('e-small');
    var element16;
    var inputObj16;
    element16 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-bigger-03')[0].appendChild(element16);
    inputObj16 = index_1.Input.createInput({
        element: element16,
        floatLabelType: "Always",
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj16.container.classList.add('e-bigger');
    inputObj16.container.classList.add('e-small');
    var element17;
    var inputObj17;
    element17 = document.createElement('input');
    element17.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-small-bigger-04')[0].appendChild(element17);
    inputObj17 = index_1.Input.createInput({
        element: element17,
        floatLabelType: "Auto",
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
    element18.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-small-bigger-05')[0].appendChild(element18);
    inputObj18 = index_1.Input.createInput({
        element: element18,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj18.container);
    inputObj18.container.classList.add('e-bigger');
    inputObj18.container.classList.add('e-small');
    var element19;
    var inputObj19;
    element19 = document.createElement('input');
    element19.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-small-bigger-06')[0].appendChild(element19);
    inputObj19 = index_1.Input.createInput({
        element: element19,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);
    inputObj19.container.classList.add('e-bigger');
    inputObj19.container.classList.add('e-small');
    document.getElementById('valuehold').addEventListener("click", function () {
        var txt = document.getElementById('valuetext').value;
        index_1.Input.setValue(txt, element10, "Auto", false);
        index_1.Input.setValue(txt, element11, "Always", false);
        index_1.Input.setValue(txt, element12, "Auto", true);
        index_1.Input.setValue(txt, element13, "Auto", false);
        index_1.Input.setValue(txt, element15, "Auto", false);
        index_1.Input.setValue(txt, element16, "Always", false);
        index_1.Input.setValue(txt, element17, "Auto", true);
        index_1.Input.setValue(txt, element18, "Auto", false);
        index_1.Input.setValue(txt, element22, "Auto", false);
        index_1.Input.setValue(txt, element23, "Auto", false);
        index_1.Input.setValue(txt, element14, "Auto", false);
        index_1.Input.setValue(txt, element19, "Auto", false);
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
        index_1.Input.setPlaceholder(txt, element22);
        index_1.Input.setPlaceholder(txt, element23);
        index_1.Input.setPlaceholder(txt, element14);
        index_1.Input.setPlaceholder(txt, element19);
    });
    document.getElementById('setenable').addEventListener("click", function () {
        index_1.Input.setEnabled(true, element10, 'Auto', inputObj10.container);
        index_1.Input.setEnabled(true, element11, 'Auto', inputObj11.container);
        index_1.Input.setEnabled(true, element12, 'Auto', inputObj12.container);
        index_1.Input.setEnabled(true, element13, 'Auto', inputObj13.container);
        index_1.Input.setEnabled(true, element15, 'Auto', inputObj15.container);
        index_1.Input.setEnabled(true, element16, 'Auto', inputObj16.container);
        index_1.Input.setEnabled(true, element17, 'Auto', inputObj17.container);
        index_1.Input.setEnabled(true, element18, 'Auto', inputObj18.container);
        index_1.Input.setEnabled(true, element22, 'Auto', inputObj22.container);
        index_1.Input.setEnabled(true, element23, 'Auto', inputObj23.container);
        index_1.Input.setEnabled(true, element14, 'Auto', inputObj14.container);
        index_1.Input.setEnabled(true, element19, 'Auto', inputObj19.container);
    });
    document.getElementById('clearenable').addEventListener("click", function () {
        index_1.Input.setEnabled(false, element10, 'Auto', inputObj10.container);
        index_1.Input.setEnabled(false, element11, 'Auto', inputObj11.container);
        index_1.Input.setEnabled(false, element12, 'Auto', inputObj12.container);
        index_1.Input.setEnabled(false, element13, 'Auto', inputObj13.container);
        index_1.Input.setEnabled(false, element15, 'Auto', inputObj15.container);
        index_1.Input.setEnabled(false, element16, 'Auto', inputObj16.container);
        index_1.Input.setEnabled(false, element17, 'Auto', inputObj17.container);
        index_1.Input.setEnabled(false, element18, 'Auto', inputObj18.container);
        index_1.Input.setEnabled(false, element22, 'Auto', inputObj22.container);
        index_1.Input.setEnabled(false, element23, 'Auto', inputObj23.container);
        index_1.Input.setEnabled(false, element14, 'Auto', inputObj14.container);
        index_1.Input.setEnabled(false, element19, 'Auto', inputObj19.container);
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
        index_1.Input.setReadonly(true, element22);
        index_1.Input.setReadonly(true, element23);
        index_1.Input.setReadonly(true, element14);
        index_1.Input.setReadonly(true, element19);
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
        index_1.Input.setReadonly(false, element22);
        index_1.Input.setReadonly(false, element23);
        index_1.Input.setReadonly(false, element14);
        index_1.Input.setReadonly(false, element19);
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
        index_1.Input.setEnableRtl(true, [inputObj22.container]);
        index_1.Input.setEnableRtl(true, [inputObj23.container]);
        index_1.Input.setEnableRtl(true, [inputObj14.container]);
        index_1.Input.setEnableRtl(true, [inputObj19.container]);
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
        index_1.Input.setEnableRtl(false, [inputObj22.container]);
        index_1.Input.setEnableRtl(false, [inputObj23.container]);
        index_1.Input.setEnableRtl(false, [inputObj14.container]);
        index_1.Input.setEnableRtl(false, [inputObj19.container]);
    });
});

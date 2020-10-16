define(["require", "exports", "../../../src/input/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inputObj;
    var inputO = index_1.Input;
    var element;
    element = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-01')[0].appendChild(element);
    inputObj = index_1.Input.createInput({
        floatLabelType: "Never",
        element: element,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj.container.classList.add('e-small');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj.container);
    var inputObj20;
    var element20;
    element20 = document.createElement('input');
    element20.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-small-02')[0].appendChild(element20);
    inputObj20 = index_1.Input.createInput({
        floatLabelType: "Never",
        element: element20,
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj20.container.classList.add('e-small');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj20.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj20.container);
    var element1;
    var inputObj1;
    element1 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-03')[0].appendChild(element1);
    inputObj1 = index_1.Input.createInput({
        floatLabelType: "Never",
        element: element1,
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj1.container.classList.add('e-small');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj1.container, element1);
    var element2;
    var inputObj2;
    element2 = document.createElement('input');
    element2.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-small-04')[0].appendChild(element2);
    inputObj2 = index_1.Input.createInput({
        element: element2,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj2.container.classList.add('e-small');
    inputObj2.container.classList.add('e-static-clear');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj2.container, element2);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj2.container, element2);
    var element3;
    var inputObj3;
    element3 = document.createElement('input');
    element3.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-small-05')[0].appendChild(element3);
    inputObj3 = index_1.Input.createInput({
        element: element3,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj3.container);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj3.container, element3);
    inputObj3.container.classList.add('e-small');
    var element4;
    var inputObj4;
    element4 = document.createElement('input');
    element4.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-small-06')[0].appendChild(element4);
    inputObj4 = index_1.Input.createInput({
        element: element4,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj4.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj4.container);
    inputObj4.container.classList.add('e-small');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj4.container, element4);
    index_1.Input.prependSpan('e-input-group-icon2 e-input-down', inputObj4.container, element4);
    // Normal Input
    var inputObj5;
    var element5;
    element5 = document.createElement('input');
    document.getElementsByClassName('inner-panel-normal-01')[0].appendChild(element5);
    inputObj5 = index_1.Input.createInput({
        element: element5,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj5.container);
    var inputObj21;
    var element21;
    element21 = document.createElement('input');
    element21.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-normal-02')[0].appendChild(element21);
    inputObj21 = index_1.Input.createInput({
        element: element21,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj21.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj21.container);
    var element6;
    var inputObj6;
    element6 = document.createElement('input');
    document.getElementsByClassName('inner-panel-normal-03')[0].appendChild(element6);
    inputObj6 = index_1.Input.createInput({
        element: element6,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Float Always'
        }
    });
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj6.container, element6);
    var element7;
    var inputObj7;
    element7 = document.createElement('input');
    element7.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-normal-04')[0].appendChild(element7);
    inputObj7 = index_1.Input.createInput({
        element: element7,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj7.container.classList.add('e-static-clear');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj7.container, element7);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj7.container, element7);
    var element8;
    var inputObj8;
    element8 = document.createElement('input');
    element8.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-normal-05')[0].appendChild(element8);
    inputObj8 = index_1.Input.createInput({
        element: element8,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj8.container);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj8.container, element8);
    var element9;
    var inputObj9;
    element9 = document.createElement('input');
    element9.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-normal-06')[0].appendChild(element9);
    inputObj9 = index_1.Input.createInput({
        element: element9,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj9.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj9.container);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj9.container, element9);
    index_1.Input.prependSpan('e-input-group-icon2 e-input-down', inputObj9.container, element9);
    // Bigger Input
    var inputObj10;
    var element10;
    element10 = document.createElement('input');
    document.getElementsByClassName('inner-panel-bigger-01')[0].appendChild(element10);
    inputObj10 = index_1.Input.createInput({
        element: element10,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj10.container.classList.add('e-bigger');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj10.container);
    var inputObj22;
    var element22;
    element22 = document.createElement('input');
    element22.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-bigger-02')[0].appendChild(element22);
    inputObj22 = index_1.Input.createInput({
        element: element22,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj22.container.classList.add('e-bigger');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);
    var element11;
    var inputObj11;
    element11 = document.createElement('input');
    document.getElementsByClassName('inner-panel-bigger-03')[0].appendChild(element11);
    inputObj11 = index_1.Input.createInput({
        element: element11,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj11.container.classList.add('e-bigger');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj11.container, element11);
    var element12;
    var inputObj12;
    element12 = document.createElement('input');
    element12.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-bigger-04')[0].appendChild(element12);
    inputObj12 = index_1.Input.createInput({
        element: element12,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj12.container.classList.add('e-bigger');
    inputObj12.container.classList.add('e-static-clear');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj12.container, element12);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj12.container, element12);
    var element13;
    var inputObj13;
    element13 = document.createElement('input');
    element13.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-bigger-05')[0].appendChild(element13);
    inputObj13 = index_1.Input.createInput({
        element: element13,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj13.container, element13);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj13.container);
    inputObj13.container.classList.add('e-bigger');
    var element14;
    var inputObj14;
    element14 = document.createElement('input');
    element14.value = 'Input with Multiple Icon';
    document.getElementsByClassName('inner-panel-bigger-06')[0].appendChild(element14);
    inputObj14 = index_1.Input.createInput({
        element: element14,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj14.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj14.container);
    inputObj14.container.classList.add('e-bigger');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj14.container, element14);
    index_1.Input.prependSpan('e-input-group-icon2 e-input-down', inputObj14.container, element14);
    // Small Bigger Input
    var inputObj15;
    var element15;
    element15 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-bigger-01')[0].appendChild(element15);
    inputObj15 = index_1.Input.createInput({
        element: element15,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj15.container.classList.add('e-bigger');
    inputObj15.container.classList.add('e-small');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj15.container);
    var inputObj23;
    var element23;
    element23 = document.createElement('input');
    element23.value = 'Input with Value';
    document.getElementsByClassName('inner-panel-small-bigger-02')[0].appendChild(element23);
    inputObj23 = index_1.Input.createInput({
        element: element23,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    inputObj23.container.classList.add('e-bigger');
    inputObj23.container.classList.add('e-small');
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj23.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj23.container);
    var element16;
    var inputObj16;
    element16 = document.createElement('input');
    document.getElementsByClassName('inner-panel-small-bigger-03')[0].appendChild(element16);
    inputObj16 = index_1.Input.createInput({
        element: element16,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Float Always'
        }
    });
    inputObj16.container.classList.add('e-bigger');
    inputObj16.container.classList.add('e-small');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj16.container, element16);
    var element17;
    var inputObj17;
    element17 = document.createElement('input');
    element17.value = 'Clear Input';
    document.getElementsByClassName('inner-panel-small-bigger-04')[0].appendChild(element17);
    inputObj17 = index_1.Input.createInput({
        element: element17,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value',
            showClearButton: true
        }
    });
    inputObj17.container.classList.add('e-bigger');
    inputObj17.container.classList.add('e-small');
    inputObj17.container.classList.add('e-static-clear');
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj17.container, element17);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj17.container, element17);
    var element18;
    var inputObj18;
    element18 = document.createElement('input');
    element18.value = 'Input with Icon';
    document.getElementsByClassName('inner-panel-small-bigger-05')[0].appendChild(element18);
    inputObj18 = index_1.Input.createInput({
        element: element18,
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj18.container, element18);
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
        floatLabelType: "Never",
        properties: {
            placeholder: 'Enter Value'
        }
    });
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj19.container, element19);
    index_1.Input.prependSpan('e-input-group-icon e-input-down', inputObj19.container, element19);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);
    inputObj19.container.classList.add('e-bigger');
    inputObj19.container.classList.add('e-small');
});

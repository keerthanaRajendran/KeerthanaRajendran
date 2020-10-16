define(["require", "exports", "../../../node_modules/@syncfusion/ej2-base", "../../../src/input/index"], function (require, exports, ej2_base_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var inputObj;
    var element;
    element = ej2_base_1.createElement('input', { id: 'inputpopup', attrs: { value: 'Floating text' } });
    document.getElementById('utilInput').appendChild(element);
    inputObj = index_1.Input.createInput({
        element: element,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Search Float',
        }
    });
    var inputObjBig;
    var elementBig;
    elementBig = ej2_base_1.createElement('input', { id: 'inputpopupbig', attrs: { value: 'Floating text' } });
    document.getElementById('utilInputBigger').appendChild(elementBig);
    inputObjBig = index_1.Input.createInput({
        element: elementBig,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Bigger Float',
        }
    });
    index_1.Input.setCssClass('e-bigger', [inputObjBig.container]);
    var element2;
    var inputObj2;
    element2 = ej2_base_1.createElement('input', { id: 'inputpopup2', attrs: { value: 'Floating text' } });
    document.getElementById('utilInputDisabled').appendChild(element2);
    inputObj2 = index_1.Input.createInput({
        element: element2,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Disabled Float',
            enabled: false,
        }
    });
    var element3;
    var inputObj3;
    element3 = ej2_base_1.createElement('input', { id: 'inputpopup3', attrs: { value: 'Floating text' } });
    document.getElementById('utilInputRead').appendChild(element3);
    inputObj3 = index_1.Input.createInput({
        element: element3,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'Readonly Float',
            readonly: true,
        }
    });
    var element4;
    var inputObj4;
    element4 = ej2_base_1.createElement('input', { id: 'inputpopup4', attrs: { value: 'Floating text' } });
    document.getElementById('utilInputRtl').appendChild(element4);
    inputObj4 = index_1.Input.createInput({
        element: element4,
        floatLabelType: "Auto",
        properties: {
            placeholder: 'RTL Float',
            enableRtl: true,
        }
    });
    var element19;
    var inputObj19;
    element19 = ej2_base_1.createElement('input', { id: 'inputDef_prop1', attrs: { type: 'text', value: 'Default' } });
    document.getElementById('inputDef1').appendChild(element19);
    inputObj19 = index_1.Input.createInput({
        element: element19,
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj19.container);
    var element20;
    var inputObj20;
    element20 = ej2_base_1.createElement('input', { id: 'inputDef_prop2', attrs: { type: 'text', value: 'Bigger' } });
    document.getElementById('inputDefBigger').appendChild(element20);
    inputObj20 = index_1.Input.createInput({
        element: element20,
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj20.container);
    index_1.Input.setCssClass('e-bigger', [inputObj20.container]);
    var element22;
    var inputObj22;
    element22 = ej2_base_1.createElement('input', { id: 'inputDis_prop3', attrs: { type: 'text', value: 'Disabled' } });
    document.getElementById('inputDis1').appendChild(element22);
    inputObj22 = index_1.Input.createInput({
        element: element22,
        properties: {
            enabled: false,
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj22.container);
    var element23;
    var inputObj23;
    element23 = ej2_base_1.createElement('input', { id: 'inputDef_prop4', attrs: { type: 'text', value: 'Readonly' } });
    document.getElementById('inputRead').appendChild(element23);
    inputObj23 = index_1.Input.createInput({
        element: element23,
        properties: {
            readonly: true,
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj23.container);
    var element24;
    var inputObj24;
    element24 = ej2_base_1.createElement('input', { id: 'inputDef_prop5', attrs: { type: 'text', value: 'RTL input' } });
    document.getElementById('inputRtl').appendChild(element24);
    inputObj24 = index_1.Input.createInput({
        element: element24,
        properties: {
            enableRtl: true,
        }
    });
    index_1.Input.appendSpan('e-input-group-icon e-input-down', inputObj24.container);
});

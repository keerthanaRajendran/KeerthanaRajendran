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
    inputObj10.container.classList.add('e-filled');
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
    inputObj11.container.classList.add('e-filled');
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
    inputObj12.container.classList.add('e-filled');
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
    inputObj13.container.classList.add('e-filled');
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
    inputObj23.container.classList.add('e-filled');
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
    inputObj15.container.classList.add('e-filled');
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
    inputObj16.container.classList.add('e-filled');
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
    inputObj17.container.classList.add('e-filled');
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
    inputObj18.container.classList.add('e-filled');
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
    inputObj24.container.classList.add('e-filled');
    document.getElementById("switchTheme").addEventListener("change", switch_theme);
    function switch_theme() {
        var theme = document.getElementById("switchTheme").value;
        var filename;
        if (theme == 'Material') {
            filename = '../../../styles/material.css';
        }
        else if (theme == 'Fabric') {
            filename = '../../../styles/fabric.css';
        }
        else {
            filename = '../../../styles/bootstrap.css';
        }
        loadcssfile(filename);
    }
    function loadcssfile(filename) {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
        (document.getElementsByTagName("head")[0]).querySelector('link').remove();
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
});

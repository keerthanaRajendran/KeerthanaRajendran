define(["require", "exports", "./../../../src/radio-button/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var radiobutton = new index_1.RadioButton({ label: 'Left Side Label', name: 'position', checked: true, labelPosition: 'Before' });
    radiobutton.appendTo('#radio1');
    var radiobutton1 = new index_1.RadioButton({ label: 'Right Side Label', name: 'position' });
    radiobutton1.appendTo('#radio2');
});

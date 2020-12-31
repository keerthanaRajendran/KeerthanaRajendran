define(["require", "exports", "./../../../src/check-box/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var cbox1 = new index_1.CheckBox();
    cbox1.appendTo('#checkbox1');
    var cbox2 = new index_1.CheckBox({ label: 'Right side label' });
    cbox2.appendTo('#checkbox2');
    var cbox3 = new index_1.CheckBox({ label: 'Left side label', labelPosition: 'Before' });
    cbox3.appendTo('#checkbox3');
});

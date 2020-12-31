define(["require", "exports", "./../../../src/check-box/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var cbox1 = new index_1.CheckBox({ label: 'Unchecked State' });
    cbox1.appendTo('#checkbox1');
    var cbox2 = new index_1.CheckBox({ label: 'Checked State', checked: true });
    cbox2.appendTo('#checkbox2');
    var cbox3 = new index_1.CheckBox({ label: 'Indeterminate State', indeterminate: true });
    cbox3.appendTo('#checkbox3');
    var cbox4 = new index_1.CheckBox({ label: 'Disabled', disabled: true });
    cbox4.appendTo('#checkbox4');
    var cbox5 = new index_1.CheckBox({ label: 'Disabled Check', checked: true, disabled: true });
    cbox5.appendTo('#checkbox5');
    var cbox6 = new index_1.CheckBox({ label: 'Disabled Indeterminate', indeterminate: true, disabled: true });
    cbox6.appendTo('#checkbox6');
});

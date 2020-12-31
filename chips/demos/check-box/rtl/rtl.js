define(["require", "exports", "./../../../src/check-box/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var cbox1 = new index_1.CheckBox({ label: 'CheckBox', enableRtl: true });
    cbox1.appendTo('#checkbox1');
    var cbox2 = new index_1.CheckBox({ label: 'CheckBox', labelPosition: 'Before', enableRtl: true });
    cbox2.appendTo('#checkbox2');
});

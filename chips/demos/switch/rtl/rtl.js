define(["require", "exports", "./../../../src/switch/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var cbox1 = new index_1.Switch({ enableRtl: true, checked: true });
    cbox1.appendTo('#switch1');
    var cbox2 = new index_1.Switch({ enableRtl: true });
    cbox2.appendTo('#switch2');
});

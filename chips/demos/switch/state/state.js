define(["require", "exports", "./../../../src/switch/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cbox1 = new index_1.Switch({});
    cbox1.appendTo('#switch1');
    var cbox2 = new index_1.Switch({ checked: true });
    cbox2.appendTo('#switch2');
});

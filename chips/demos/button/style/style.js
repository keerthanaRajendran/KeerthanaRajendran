define(["require", "exports", "./../../../src/button/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var btnObj = new index_1.Button({ cssClass: 'e-primary' });
    btnObj.appendTo('#button1');
    btnObj = new index_1.Button({ cssClass: 'e-success' });
    btnObj.appendTo('#button2');
    btnObj = new index_1.Button({ cssClass: 'e-info' });
    btnObj.appendTo('#button3');
    btnObj = new index_1.Button({ cssClass: 'e-warning' });
    btnObj.appendTo('#button4');
    btnObj = new index_1.Button({ cssClass: 'e-danger' });
    btnObj.appendTo('#button5');
    btnObj = new index_1.Button({ cssClass: 'e-link' });
    btnObj.appendTo('#button6');
});

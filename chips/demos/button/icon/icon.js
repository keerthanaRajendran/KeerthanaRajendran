define(["require", "exports", "./../../../src/button/index", "@syncfusion/ej2-base"], function (require, exports, index_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var btnObj = new index_1.Button({ iconCss: 'e-icons e-add-icon' });
    btnObj.appendTo('#button1');
    btnObj = new index_1.Button({ iconCss: 'e-icons e-open-icon' });
    btnObj.appendTo('#button2');
    btnObj = new index_1.Button({ iconCss: 'e-icons e-open-icon', iconPosition: 'Right' });
    btnObj.appendTo('#button3');
});

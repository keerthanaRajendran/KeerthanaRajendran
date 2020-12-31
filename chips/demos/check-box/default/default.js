define(["require", "exports", "./../../../src/check-box/index", "./../../../src/button/index", "@syncfusion/ej2-base"], function (require, exports, index_1, index_2, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var cbox1 = new index_1.CheckBox({ label: 'Football' });
    cbox1.appendTo('#checkbox1');
    var cbox2 = new index_1.CheckBox({ checked: true, label: 'Basketball' });
    cbox2.appendTo('#checkbox2');
    var cbox3 = new index_1.CheckBox({ disabled: true, label: 'Tennis' });
    cbox3.appendTo('#checkbox3');
    var cbox4 = new index_1.CheckBox({ label: 'Cricket' });
    cbox4.appendTo('#checkbox4');
    var cbox5 = new index_1.CheckBox({ label: 'Baseball' });
    cbox5.appendTo('#checkbox5');
    var btnObj = new index_2.Button();
    btnObj.appendTo('#material');
    btnObj = new index_2.Button();
    btnObj.appendTo('#fabric');
    btnObj = new index_2.Button();
    btnObj.appendTo('#bootstrap');
    btnObj = new index_2.Button();
    btnObj.appendTo('#highcontrast');
    btnObj = new index_2.Button();
    btnObj.appendTo('#materialdark');
    btnObj = new index_2.Button();
    btnObj.appendTo('#fabricdark');
    btnObj = new index_2.Button();
    btnObj.appendTo('#bootstrapdark');
    btnObj = new index_2.Button();
    btnObj.appendTo('#bootstrap4');
    document.getElementById('material').onclick = function (e) {
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/material.css');
        ej2_base_1.enableRipple(true);
        refresh();
    };
    document.getElementById('fabric').onclick = function (e) {
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/fabric.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    document.getElementById('bootstrap').onclick = function (e) {
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    document.getElementById('highcontrast').onclick = function (e) {
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/highcontrast.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    document.getElementById('materialdark').onclick = function (e) {
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/material-dark.css');
        ej2_base_1.enableRipple(true);
        refresh();
    };
    document.getElementById('fabricdark').onclick = function (e) {
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/fabric-dark.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    document.getElementById('bootstrapdark').onclick = function (e) {
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap-dark.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    document.getElementById('bootstrap4').onclick = function (e) {
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap4.css');
        ej2_base_1.enableRipple(false);
        refresh();
    };
    function refresh() {
        setTimeout(function () {
            var ele = document.getElementById('basic').getElementsByTagName('input');
            for (var i = 0; i < ele.length; i++) {
                ele[i].ej2_instances[0].refresh();
            }
        }, 1000);
    }
});

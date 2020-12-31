define(["require", "exports", "./../../../src/radio-button/index", "@syncfusion/ej2-base", "../../../src/button/index"], function (require, exports, index_1, ej2_base_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var radiobutton = new index_1.RadioButton({ label: 'Credit/Debit Card', name: 'payment', value: 'credit/debit', checked: true });
    radiobutton.appendTo('#radio1');
    var radiobutton1 = new index_1.RadioButton({ label: 'Net Banking', name: 'payment', value: 'netbanking' });
    radiobutton1.appendTo('#radio2');
    var radiobutton2 = new index_1.RadioButton({ label: 'Cash on Delivery', name: 'payment', value: 'cashondelivery' });
    radiobutton2.appendTo('#radio3');
    var radiobutton3 = new index_1.RadioButton({ label: 'Other Wallets', name: 'payment', value: 'others' });
    radiobutton3.appendTo('#radio4');
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
            var ele = document.getElementById('radio').getElementsByTagName('input');
            for (var i = 0; i < ele.length; i++) {
                ele[i].ej2_instances[0].refresh();
            }
        }, 1000);
    }
});

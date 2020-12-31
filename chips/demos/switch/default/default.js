define(["require", "exports", "@syncfusion/ej2-base", "./../../../src/switch/index", "./../../../src/common/index", "../../../src/button/index"], function (require, exports, ej2_base_1, index_1, index_2, index_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_base_1.enableRipple(true);
    var switch1 = new index_1.Switch({ name: 'hotspot', value: 'USB tethering',
        checked: true });
    switch1.appendTo('#switch1');
    var switch2 = new index_1.Switch({ name: 'hotspot', value: 'Wi-Fi hotspot',
        onLabel: 'ON', offLabel: 'OFF' });
    switch2.appendTo('#switch2');
    var switch3 = new index_1.Switch({ name: 'hotspot', value: 'Bluetooth tethering',
        disabled: true });
    switch3.appendTo('#switch3');
    var switch4 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', disabled: true, onLabel: 'ON', offLabel: 'OFF'
    });
    switch4.appendTo('#switch4');
    var switch5 = new index_1.Switch({ name: 'hotspot', value: 'Wi-Fi', enableRtl: true });
    switch5.appendTo('#switch5');
    var switch6 = new index_1.Switch({ enableRtl: true,
        name: 'hotspot', value: 'Bluetooth tethering', onLabel: 'ON', offLabel: 'OFF' });
    switch6.appendTo('#switch6');
    var switch7 = new index_1.Switch({ name: 'hotspot', value: 'USB tethering', enableRtl: true,
        checked: true, onLabel: 'ON', offLabel: 'OFF', disabled: true });
    switch7.appendTo('#switch7');
    var switch8 = new index_1.Switch({
        name: 'hotspot', cssClass: 'e-bigger', value: 'Wi-Fi hotspot'
    });
    switch8.appendTo('#switch8');
    var switch9 = new index_1.Switch({
        name: 'hotspot', value: 'Bluetooth tethering', cssClass: 'e-bigger', onLabel: 'ON', offLabel: 'OFF'
    });
    switch9.appendTo('#switch9');
    var switch10 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', cssClass: 'e-bigger', disabled: true
    });
    switch10.appendTo('#switch10');
    var switch11 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi', cssClass: 'e-bigger', checked: true, onLabel: 'ON', offLabel: 'OFF', disabled: true
    });
    switch11.appendTo('#switch11');
    var switch12 = new index_1.Switch({
        enableRtl: true, name: 'hotspot', cssClass: 'e-bigger', value: 'Bluetooth tethering'
    });
    switch12.appendTo('#switch12');
    var switch13 = new index_1.Switch({
        name: 'hotspot', value: 'USB tethering', cssClass: 'e-bigger', enableRtl: true, checked: true, onLabel: 'ON', offLabel: 'OFF'
    });
    switch13.appendTo('#switch13');
    var switch14 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi hotspot', onLabel: 'ON', cssClass: 'e-bigger', offLabel: 'OFF', disabled: true
    });
    switch14.appendTo('#switch14');
    var switch15 = new index_1.Switch({
        name: 'hotspot', value: 'Bluetooth tethering', cssClass: 'e-small'
    });
    switch15.appendTo('#switch15');
    var switch16 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', cssClass: 'e-small', onLabel: 'ON', offLabel: 'OFF'
    });
    switch16.appendTo('#switch16');
    var switch17 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi', cssClass: 'e-small', checked: true, disabled: true
    });
    switch17.appendTo('#switch17');
    var switch18 = new index_1.Switch({
        name: 'hotspot', cssClass: 'e-small', value: 'Bluetooth tethering', onLabel: 'ON', offLabel: 'OFF', disabled: true
    });
    switch18.appendTo('#switch18');
    var switch19 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', cssClass: 'e-small', enableRtl: true
    });
    switch19.appendTo('#switch19');
    var switch20 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi', cssClass: 'e-small', checked: true, onLabel: 'ON', offLabel: 'OFF', enableRtl: true
    });
    switch20.appendTo('#switch20');
    var switch21 = new index_1.Switch({
        enableRtl: true,
        name: 'hotspot', cssClass: 'e-small', value: 'Bluetooth tethering', disabled: true, onLabel: 'ON', offLabel: 'OFF'
    });
    switch21.appendTo('#switch21');
    var switch22 = new index_1.Switch({
        name: 'hotspot', value: 'Bluetooth tethering', cssClass: 'e-small'
    });
    switch22.appendTo('#switch22');
    var switch23 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', cssClass: 'e-small', onLabel: 'ON', offLabel: 'OFF'
    });
    switch23.appendTo('#switch23');
    var switch24 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi', cssClass: 'e-small', checked: true, disabled: true
    });
    switch24.appendTo('#switch24');
    var switch25 = new index_1.Switch({ name: 'hotspot', cssClass: 'e-small', value: 'Bluetooth tethering', disabled: true, onLabel: 'ON',
        offLabel: 'OFF'
    });
    switch25.appendTo('#switch25');
    var switch26 = new index_1.Switch({
        name: 'hotspot', value: 'RTL', cssClass: 'e-small', enableRtl: true
    });
    switch26.appendTo('#switch26');
    var switch27 = new index_1.Switch({
        name: 'hotspot', value: 'Wi-Fi', cssClass: 'e-small', checked: true, onLabel: 'ON', offLabel: 'OFF', enableRtl: true
    });
    switch27.appendTo('#switch27');
    var switch28 = new index_1.Switch({
        enableRtl: true,
        name: 'hotspot', cssClass: 'e-small', value: 'Bluetooth tethering', disabled: true, onLabel: 'ON', offLabel: 'OFF'
    });
    switch28.appendTo('#switch28');
    var btnObj = new index_3.Button();
    btnObj.appendTo('#material');
    btnObj = new index_3.Button();
    btnObj.appendTo('#fabric');
    btnObj = new index_3.Button();
    btnObj.appendTo('#bootstrap');
    btnObj = new index_3.Button();
    btnObj.appendTo('#highcontrast');
    btnObj = new index_3.Button();
    btnObj.appendTo('#materialdark');
    btnObj = new index_3.Button();
    btnObj.appendTo('#fabricdark');
    btnObj = new index_3.Button();
    btnObj.appendTo('#bootstrapdark');
    btnObj = new index_3.Button();
    btnObj.appendTo('#bootstrap4');
    document.getElementById('material').onclick = function (e) {
        ej2_base_1.enableRipple(true);
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/material.css');
        switchRippleHandler();
        refresh();
    };
    document.getElementById('fabric').onclick = function (e) {
        ej2_base_1.enableRipple(false);
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/fabric.css');
        refresh();
    };
    document.getElementById('bootstrap').onclick = function (e) {
        ej2_base_1.enableRipple(false);
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap.css');
        refresh();
    };
    document.getElementById('highcontrast').onclick = function (e) {
        ej2_base_1.enableRipple(false);
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/highcontrast.css');
        refresh();
    };
    document.getElementById('materialdark').onclick = function (e) {
        ej2_base_1.enableRipple(true);
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/material-dark.css');
        switchRippleHandler();
        refresh();
    };
    document.getElementById('fabricdark').onclick = function (e) {
        ej2_base_1.enableRipple(true);
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/fabric-dark.css');
        refresh();
    };
    document.getElementById('bootstrapdark').onclick = function (e) {
        ej2_base_1.enableRipple(false);
        document.body.classList.add('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap-dark.css');
        refresh();
    };
    document.getElementById('bootstrap4').onclick = function (e) {
        ej2_base_1.enableRipple(false);
        document.body.classList.remove('darkBG');
        document.getElementById('theme').setAttribute('href', '../../theme-files/bootstrap4.css');
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
    function switchRippleHandler() {
        var elemArray = document.querySelectorAll('.switch-control label');
        var _loop_1 = function (i, len) {
            var switchInst = ej2_base_1.getValue('ej2_instances', elemArray[i].parentElement.nextElementSibling.querySelector('.e-switch'))[0];
            elemArray[i].addEventListener('mouseup', function (e) {
                var rippleSpan = switchInst.element.parentElement.getElementsByClassName('e-ripple-container')[0];
                index_2.rippleMouseHandler(e, rippleSpan);
            });
            elemArray[i].addEventListener('mousedown', function (e) {
                var rippleSpan = switchInst.element.parentElement.getElementsByClassName('e-ripple-container')[0];
                index_2.rippleMouseHandler(e, rippleSpan);
            });
        };
        for (var i = 0, len = elemArray.length; i < len; i++) {
            _loop_1(i, len);
        }
    }
});

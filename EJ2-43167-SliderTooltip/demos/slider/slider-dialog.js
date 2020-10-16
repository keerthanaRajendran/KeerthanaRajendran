define(["require", "exports", "../../src/slider/slider", "@syncfusion/ej2-buttons", "@syncfusion/ej2-popups"], function (require, exports, slider_1, ej2_buttons_1, ej2_popups_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Render the alert Dialog
    var alertDialogObj = new ej2_popups_1.Dialog({
        header: "Slider",
        content: '<div id="default"></div>',
        showCloseIcon: false,
        buttons: [{
                click: alertDlgBtnClick, buttonModel: { content: 'Dismiss', cssClass: 'e-flat', isPrimary: true }
            }],
        closeOnEscape: false, width: '250px',
        target: document.getElementById('target'),
        animationSettings: { effect: 'None' },
        visible: false
    });
    alertDialogObj.appendTo('#alertDialog');
    var defaultObj;
    // Create Button to open the alert Dialog
    var alertBtn = new ej2_buttons_1.Button({});
    alertBtn.appendTo('#alertBtn');
    document.getElementById('alertBtn').onclick = function () {
        alertDialogObj.show();
        //Rendering slider
        if (!defaultObj) {
            defaultObj = new slider_1.Slider({
                min: 10,
                value: 30,
                max: 90,
                step: 5,
                ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true },
                showButtons: true,
                tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' }
            });
            defaultObj.appendTo('#default');
        }
    };
    function alertDlgBtnClick() {
        alertDialogObj.hide();
    }
});

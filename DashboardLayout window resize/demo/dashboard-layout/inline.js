define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dashboard = new dashboard_layout_1.DashboardLayout({
        cellSpacing: [10, 10],
        allowResizing: true,
        columns: 5,
    });
    dashboard.appendTo('#defaultLayout');
    var count = 8;
    document.getElementById('add').onclick = function () {
        var panel = [{
                'id': count.toString() + '_layout', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0,
                content: '<span id="close" class="e-template-icon e-clear-icon"></span><div class="text-align">' + count.toString() + '</div>'
            }];
        dashboard.addPanel(panel[0]);
        var closeIcon = document.getElementById(count.toString() + '_layout').querySelector('.e-clear-icon');
        closeIcon.addEventListener('click', onCloseIconHandler);
        count = count + 1;
    };
    function onCloseIconHandler(event) {
        if (event.target.offsetParent) {
            dashboard.removePanel(event.target.offsetParent.id);
        }
    }
    var closeElement = document.querySelectorAll('.e-clear-icon');
    for (var i = 0; i < closeElement.length; i++) {
        closeElement[i].addEventListener('click', onCloseIconHandler);
    }
});

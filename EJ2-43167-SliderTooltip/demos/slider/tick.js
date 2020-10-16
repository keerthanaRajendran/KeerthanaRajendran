define(["require", "exports", "../../src/slider/slider"], function (require, exports, slider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
       var minRangeObj = new slider_1.Slider({
        // Set the value for slider
        value: 30,
        // Set the type to render minRange slider
        type: 'MinRange',
        // Initialize ticks with placement, largestep, smallstep
        ticks: { placement: 'Both', largeStep: 20, smallStep: 5, showSmallTicks: true },
        // Initialize tooltip with placement and showOn
        tooltip: { isVisible: true, placement: 'Before', showOn: 'Focus' },
        // create event for slider
        created: onCreated,
        // change event for slider
        change: onChange,
        // changed event for slider
        changed: onChanged
    });
    minRangeObj.appendTo('#minrange');
    //Clears the event log details
    //Handler for create event trace
    function onCreated() {
        console.log('Slider control has been <b>created</b><hr>');
    }
    //Handler for change event trace
    function onChange(args) {
        console.log('Slider value is <b>changing</b> from ' + args.previousValue + '  to  ' + args.value + '<hr>');
    }
    //Handler for changed event trace
    function onChanged(args) {
        console.log('Slider value has been <b>changed</b> from ' + args.previousValue + '  to  ' + args.value + '<hr>');
    }
  

    if (document.getElementById('right-pane')) {
        document.getElementById('right-pane').addEventListener('scroll', onScroll);
    }

    function onScroll() {
        var slider = [minRangeObj];
        slider.forEach(function (slider) {
            // Refreshing each slider tooltip object position
            slider.refreshTooltip(slider.tooltipTarget);
        });
    }
});

define(["require", "exports", "../../src/slider/slider", "@syncfusion/ej2-buttons"], function (require, exports, slider_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Default Slider sample
     */
   var defaultObj = new slider_1.Slider({
                min: 0,
                max: 4,
                value: 3,
                step: 1,

                    renderingTicks: function (args) {
                        let labels = [
                                'very bad',
                                'bad',
                                'moderate',
                                'good',
                                'very good',
                        ];
                        args.text = labels[parseFloat(args.text)];
                    },



            

                    tooltipChange: function (args) {
                        console.log("change")
                        let details = [
                                'that means that the selected option is ranked in the worst possible way: very bad',
                                'b',
                                'still below good',
                                'here we are - finally good',
                                'that&#39;s the best case! Very good',
                        ];
                        args.text = details[parseFloat(args.text)];
                    },






                showButtons: false,
                type: 'MinRange',
                enabled: true,
                cssClass: ' '.trim(),
                tooltip: {
                    placement: 'Before',
                    isVisible: true,
                    showOn: 'Hover',
                    format: 'N',
                },
                ticks: {
                    placement: 'Before',
                    format: '#',
                    largeStep: 1,
                    smallStep: 1,
                    showSmallTicks: true
                },
            }, '#default');

});

require.config({

    baseUrl: './',

    packages: [{
        name: '@syncfusion/ej2-base',
        location: '../../../node_modules/@syncfusion/ej2-base/dist',
        main: 'ej2-base.umd.min.js'
    }, {
        name: '@syncfusion/ej2-data',
        location: '../../../node_modules/@syncfusion/ej2-data/dist',
        main: 'ej2-data.umd.min.js'
    }, {
        name: '@syncfusion/ej2-buttons',
        location: '../../../node_modules/@syncfusion/ej2-buttons/dist',
        main: 'ej2-buttons.umd.min.js'
    }
    ]

});

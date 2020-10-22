require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: './base',

    packages: [{
            name: '@syncfusion/ej2-base',
            location: '../../node_modules/@syncfusion/ej2-base',
            main: 'index.js'
        },
        {
            name: '@syncfusion/ej2-buttons',
            location: '../../node_modules/@syncfusion/ej2-buttons',
            main: 'index.js'
        },
        {
            name: '@syncfusion/ej2-popups',
            location: '../../node_modules/@syncfusion/ej2-popups',
            main: 'index.js'
        },
        {
            name: '@syncfusion/ej2-data',
            location: '../../node_modules/@syncfusion/ej2-data',
            main: 'index.js'
        },
        {
            name: '@syncfusion/ej2-lists',
            location: '../../node_modules/@syncfusion/ej2-lists',
            main: 'index.js'
        },
        {
            name: '@syncfusion/ej2-inputs',
            location: '../../node_modules/@syncfusion/ej2-inputs',
            main: 'index.js'
        }
    ]
});
require.config({
    // Karma serves files under '/base', which is the basePath from your config file
    baseUrl: './base',

    packages: [{
        name: '@syncfusion/ej2-base',
        location: './../../../node_modules/@syncfusion/ej2-base/dist',
        main: 'ej2-base.umd.min.js'
    }]
});

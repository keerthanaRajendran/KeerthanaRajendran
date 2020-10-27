
 
    var grid = new ej.grids.Grid({
        dataSource: window.orderDataSource,
        allowPaging: true,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right' },
            { field: 'CustomerName', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format :{type:'dateTime', format: 'M/d/y hh:mm a'}, textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
  $("#numeric").ejNumericTextbox(
                                 {
                                     name: "numeric",
                                     minValue: 0,
                                     width:"100%"
                                 });
 $("#start").ejButton({
            size: "large",
            showRoundedCorner: true,
            click: "start",

        });




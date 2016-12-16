mainApp
    .directive("customerSection", function () {
        return {
            restrict: "AE",
            scope: {
                data:'='
            },
            //template: "<h1>{{customer}}</h1>",
            templateUrl: 'views/form/cards/customersection.html?=1' 
        };
    })
    .directive("productSection", function () {
        return {
            restrict: "AE",
            scope: {
                data:'='
            },
            //template: "product: <h1>{{data}}</h1>",
            templateUrl: 'views/form/cards/productsection.html?=1' 
        };
    })
    .directive("customerInput", function () {
        return {
            restrict: "AE",
            scope: {
                data:'=',
                title: '='
            },
            //template: "Customer: <h1>{{data}}</h1> {{title}}",
            templateUrl: 'views/form/cards/customerinput.html?=1' 
        };
    })    
    ;

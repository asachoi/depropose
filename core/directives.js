mainApp
    .directive("customerSection", function () {
        return {
            restrict: "AE",
            scope: {
                data:'='
            },
            //template: "<h1>{{customer}}</h1>",
            templateUrl: 'views/form/cards/customersection.html?cb=' + cachebuster
        };
    })
    .directive("productSection", function () {
        return {
            restrict: "AE",
            scope: {
                data:'='
            },
            //template: "product: <h1>{{data}}</h1>",
            templateUrl: 'views/form/cards/productsection.html?cb=' + cachebuster
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
            templateUrl: 'views/form/cards/customerinput.html?cb=' + cachebuster
        };
    })
    .directive('range', function() {
    return {
        require: 'ngModel',
        scope: {
            max:'=',
            min:'='
        },
        link: function(scope, element, attr, mCtrl) {
        function myValidation(value) {
            if (value.indexOf("e") > -1) {
            mCtrl.$setValidity('charE', true);
            } else {
            mCtrl.$setValidity('charE', false);
            }
            return value;
        }
        mCtrl.$parsers.push(myValidation);
        }
    };
    });    
 

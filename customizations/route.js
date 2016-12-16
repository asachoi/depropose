
mainApp.config(
    function ($stateProvider) {
        $stateProvider
        .state('form.debug', {
            url: '/debug',
            cache: false,
            templateUrl: 'customizations/views/tabs/debug.html?cb=' + cachebuster
            ,
            controller: function ($scope, $rootScope) {
                //$scope.title = 'title_list';
            }
        })
        ;
    }

);


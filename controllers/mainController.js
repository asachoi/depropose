mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices', 'commonServices',
        function ($scope, $rootScope, $translate, $http, productServices, commonServices) {

            $scope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentstate = toState.name;
                });




            var promise = commonServices.getCustomConfig();

            promise.then(
                function (payload) {
                    //console.debug(payload.data.tabs);
                    $rootScope.customFormTabs = payload.data.tabs;
                }
            );

            promise = productServices.loadProducts();
            //console.debug('x');
            promise.then(
                function (payload) {
                    $rootScope.settingObj = payload.data;
                    console.debug(payload);
                    $scope.settingObj = $rootScope.settingObj;
                }
            );

            promise = productServices.loadRiders();
            //console.debug('x');
            promise.then(
                function (payload) {
                    $rootScope.settingObj.riders = payload.data;
                    console.debug(payload);
                    $scope.settingObj = $rootScope.settingObj;
                }
            )        ;    


            $rootScope.stateObj = productServices.loadInitState();
            $scope.stateObj = $rootScope.stateObj;





        }]);


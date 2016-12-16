mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices', 'commonServices',
        function ($scope, $rootScope, $translate, $http, productServices, commonServices) {

            $scope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentstate = toState.name;
                });

            $rootScope.stateObj = productServices.loadInitState();
            $rootScope.settingObj = productServices.loadProducts();
            $scope.stateObj = $rootScope.stateObj;
            $scope.settingObj = $rootScope.settingObj;

            var promise = commonServices.getCustomConfig();

            promise.then(
                function(payload) {
                    console.debug(payload.data.tabs);
                    $rootScope.customFormTabs = payload.data.tabs;
                }
            )
            
            
 
            


        }]);
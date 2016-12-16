mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices', 'commonServices',
        function ($scope, $rootScope, $translate, $http, productServices, commonServices) {
            $scope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentstate = toState.name;
                });

            $rootScope.stateObj = productServices.loadInitState();
            $rootScope.settingObj = productServices.loadProducts();

            //bootstrap for custom tabs
            $rootScope.customFormTabs = commonServices.getCustomConfig().tabs; 
            
            //['debug'];

            $scope.stateObj = $rootScope.stateObj;
            $scope.settingObj = $rootScope.settingObj;
            

            //$rootScope.state = 'xxx';// toState;

        }]);
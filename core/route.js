mainApp.config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            cache: false,
            templateUrl: 'views/list.html?cb=' + cachebuster
            ,
            controller: function ($scope, $rootScope) {
                $scope.title = 'title_list';
            }
        })
        .state('form', {
            url: '/form',
            cache: false,
            templateUrl: 'views/form.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                //$scope.state = $state;

                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;
                $scope.title = 'title.form';
                $scope.customFormTabs = $rootScope.customFormTabs;

                $scope.setDisable = function (section) {

                    return true;
                }
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'views/form/customer.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;

                $scope.updateSamePerson = function () {
                    $rootScope.settings.customerFormComplete = $scope.userForm.$valid;
                }
            }
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'views/form/baseplan.html?cb=' + cachebuster,
            controller: ['$scope', '$rootScope', '$filter', '$state', 'productServices',
                function ($scope, $rootScope, $filter, $state, productServices) {
                    $scope.current = $state.current;
                    $scope.baseObj = $rootScope.stateObj;
                    $scope.settingObj = $rootScope.settingObj;

                    //$scope.settingObj.productFormStatus = productForm;

                    $scope.getProductGroupList = function () {

                        return productServices.getProductGroupList();
                    }

                    $scope.getProduct = function (productid) {
                        return productServices.getProductGroup(productid);
                    }

                    $scope.getPlan = function (productid, planid) {
                        return productServices.getPlan(productid, planid);
                    }

                    $scope.changePlan = function () {
                        if ($scope.baseObj.product.planid == null) return;

                        $scope.selectedPlan = productServices.getPlan($scope.baseObj.product.productid, $scope.baseObj.product.planid);
                        $rootScope.selectedPlan = $scope.selectedPlan;
                        $scope.selectedProduct = productServices.getProduct($scope.baseObj.product.productid, $scope.baseObj.product.planid);
                        $rootScope.selectedProduct = $scope.selectedProduct;
                    }

                    $scope.getBaseProductPlans = function (productid) {
                        return productServices.getPlansByProduct(productid);
                    }

                }]
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'views/form/rider.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state, productServices) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;
                $scope.selectedRiders = [];

                $scope.getRiderObject = function(ridercode) {
                     return $filter('filter')($scope.baseObj.riders, { ridercode: ridercode })[0];
                }

                $scope.setRiderList = function () {
                    if ($rootScope.selectedPlan == null) return;
                    var rs = $rootScope.selectedPlan.riders;
                    var riders = [];

                    rs.forEach(
                        function (item, index) {
                    //console.debug(item);
                            riders.push(
                                {
                                    ridercode: item,
                                    selected: false
                                }
                            )
                        }
                    );
                    return riders;

                }

                $scope.getRiderList = function () {
                    if ($rootScope.selectedPlan == null) return;
                    var rs = $rootScope.selectedPlan.riders;
                    return rs;
                }

                $scope.getRiderSetting = function (ridercode) {
                    return productServices.getRiderSetting(ridercode);
                }

                $scope.toggle = function (item, list) {

                    var idx = list.indexOf(item);
                    if (idx > -1) { // remove
                        list.splice(idx, 1);
                        $scope.getRiderObject(item).selected=false;
                    }
                    else {  //add
                        list.push(item);
                        $scope.getRiderObject(item).selected=true;
                    }
                };

                $scope.exists = function (item, list) {
                    if (list == null) return;

                    return list.indexOf(item) > -1;
                };

            }
        })
        .state('form.summary', {
            url: '/summary',
            cache: false,
            templateUrl: 'views/form/summary.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;
            }
        })
        ;


});
mainApp.service('commonServices', function ($http, $rootScope, $filter, $q) {

    this.getCustomConfig = function () {
        return $http.get('customizations/config.txt');
    }
});
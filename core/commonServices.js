mainApp.service('commonServices', function ($http, $rootScope, $filter, $q) {

    this.getCustomConfig = function () {
        getData('customizations/config.txt').then(
            function(data) {
                console.debug(data.data);
                return data;
            }
        )
        
    }

    var deferred = $q.defer();

   var getData = function(url) {
        return $http({
            url : url,
            method : 'GET',
            async : false,
            cache : false,
            headers : { 'Accept' : 'application/json' , 'Pragma':'no-cache'}
        }).success(function(data) {
           // for each log entry in data, populate logEntries
           // push(new LogEntry( stuff from data ))...
           return data;
        });
   }     
 


});
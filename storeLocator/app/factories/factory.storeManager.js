storeLocator.factory('storeManager', ['$http', '$httpParamSerializerJQLike', 'appConfig', function($http, $httpParamSerializerJQLike, appConfig) {
    var store_manager = {};

    store_manager.getAll = function(completionHandler) {
        $http.get(appConfig.apiUrl)
            .success(function(res) {
                if(res.success) {
                    completionHandler(null, (res.data||[]));
                } else {
                    completionHandler(true);
                }
            }).error(function() {
            completionHandler(true);
        });
    };

    store_manager.get = function(guid, completionHandler) {
        $http.get(appConfig.apiUrl + (guid||""))
            .success(function(res) {
                if(res.success) {
                    completionHandler(null, (res.data||[]));
                } else {
                    completionHandler(true);
                }
            }).error(function() {
            completionHandler(true);
        });
    };

    return store_manager;
}]);

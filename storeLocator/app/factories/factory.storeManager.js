storeLocator.factory('storeManager', ['$http', 'appConfig', 'storesService', function($http, appConfig, storesService) {
    var store_manager = {};
    
    store_manager.getAll = function(completionHandler) {
        if (storesService.isValid()) {
            completionHandler(null, storesService.get());
        } else {
            $http.get(appConfig.apiUrl)
                .success(function(res) {
                    if(res.success) {
                        storesService.set(res.data||[]);
                        completionHandler(null, (res.data||[]));
                    } else {
                        completionHandler(true, res);
                    }
                }).error(function() {
                completionHandler(true, {
                    errorCode: 0,
                    errorMessage: 'Error on login request'
                });
            });
        }
    };

    store_manager.get = function(guid, completionHandler) {
        $http.get(appConfig.apiUrl + '/' + (guid||""))
            .success(function(res) {
                if(res.success) {
                    completionHandler(null, (res.data||[]));
                } else {
                    completionHandler(true, res);
                }
            }).error(function() {
            completionHandler(true, {
                errorCode: 0,
                errorMessage: 'Error on login request'
            });
        });
    };

    return store_manager;
}]);

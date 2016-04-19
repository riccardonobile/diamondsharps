storeLocator.factory('sessionManager', ['$http', '$httpParamSerializerJQLike', 'appConfig', 'storageManager',function($http, $httpParamSerializerJQLike, appConfig, storageManager) {
    var session_manager = {};

    session_manager.verify = function(completionHandler) {

        var _session = storageManager.getSession();
        if(_session) {
            _session = _session.session;
            $http.get(appConfig.sessionUrl + _session, $httpParamSerializerJQLike({session: _session}), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function(res) {
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
        } else {
            completionHandler(true, {
                errorCode: 0,
                errorMessage: 'Error on login request'
            });
        }
    };

    return session_manager;
}]);


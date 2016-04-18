storeLocator.factory('authInterceptor', ['$rootScope', 'storageManager', function($rootScope, storageManager) {
    var auth_interceptor = {};

    auth_interceptor.request = function(config) {

        var _accessToken = storageManager.getSession();

        if (_accessToken) {
            config.headers['x-bitrace-session'] = _accessToken.session;
        }

        return config;
    };

    auth_interceptor.responseError = function(res) {
        if(!res.status) {
            $rootScope.$broadcast('unauthorized');
        }
    };
    
    return auth_interceptor;
}]);

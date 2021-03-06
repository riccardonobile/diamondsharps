storeLocator.factory('authManager', ['$http', 'appConfig', function($http, appConfig) {
    var auth_manager = {};

    auth_manager.login = function(email, password, completionHandler) {
        var _email = (email||'');
        var _password = (password||'');

        _password = CryptoJS.SHA512(_password).toString(CryptoJS.enc.Base64);

        var _credentials = {
            email: _email,
            password: _password
        };

        $http.post(appConfig.authUrl, _credentials)
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

    auth_manager.logout = function(completionHandler) {
        completionHandler(null, true);
    };

    return auth_manager;
}]);

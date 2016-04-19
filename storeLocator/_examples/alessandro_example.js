// app.js (app)

var storeLocator = angular.module('storeLocator', ['ngCookies']);

storeLocator.constant('RequestURL', {
    auth: {
        protocol: 'http',
        host: 'its-bitrace.herokuapp.com/api/public/v2/login'
    },
    data: {
        protocol: 'http',
        host: 'its-bitrace.herokuapp.com/api/v2/stores'
    }
});

storeLocator.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});


// map.js (controller)

storeLocator.controller('mapController', function($scope, $cookies, StoreManager, OpenStore) {
    $scope.loadStores = function() {
        StoreManager.getAll(function(err, res) {
            if (err) {
                return console.log("Handle this error");
            }
            if(res && res.length) {
                StoreManager.get(result[0].guid, function(err, res) {
                    if(err) {
                        return console.log("Handle this error");
                    }
                    OpenStore.set(res);
                    console.log('GET: ', OpenStore.get());
                })
            }
        });
    };

    $scope.loadStoreDetails = function(guid) {

    };

    $scope.loadStores();
});

// login.js (controller)

storeLocator.controller('loginController', function($scope, $cookies, LoginManager) {
    $scope.submitLogin = function() {
        LoginManager.login('tsac-2015@tecnicosuperiorekennedy.it', 'tsac', function(err, res) {
            if(err)
                return;

            $cookies.put('x-bitrace-session', res.session);
        });
    };

    $scope.submitLogin();
});

// login.js (factories)

storeLocator.factory('LoginManager', function($http, RequestURL) {
    var login_manager = {};

    login_manager.login = function(email, password, completionHandler) {
        var _email = (email||'');
        var _password = (password||'');

        _password = CryptoJS.SHA512(_password).toString(CryptoJS.enc.Base64);

        var _credentials = {
            email: _email,
            password: _password
        };

        $http.post(RequestURL.auth.protocol + '://' + RequestURL.auth.host, $httpParamSerializerJQLike(_credentials), {
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
    };

    return login_manager;
});

// store.js (factories)

storeLocator.factory('StoreManager', function() {
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
});

// authInterceptor.js (factories)

storeLocator.factory('AuthInterceptor', function() {

});

/* storeLocator.service('OpenStore', function(StoreManager) {

    this.openStore = {};

    this.set = function(obj, completionHandler) {
        this.openStore = obj;
    };

    this.get = function() {
        if (this.isValid()) {
            return this.openStore;
        }

        return undefined;
    };

    this.isValid = function() {
        return ((this.openStore!==undefined)&&(_.keys(this.openStore)||[]).length>0);
    };

    this.clear = function() {
        this.openStore = {};
    }
}); */


/* controller lista stores
        approfondisci dettagli di questo store
            getStoreDetails
                setto a livello del service e poi lancio il controller con i dettagli

                $scope.openStore = openStore.get();

                $state.prev();



 get Closest coordinates (le mie coordinate, tutte le coordinate)

 */
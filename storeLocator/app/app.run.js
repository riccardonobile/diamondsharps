storeLocator.run(['$rootScope', '$location', 'storageManager', 'sessionManager', function($rootScope, $location, storageManager, sessionManager) {
    $rootScope.$on('$routeChangeStart', function(event, current, next) {
        $rootScope.currentRoot = current.$$route.originalPath;
        var _requireLogin = current.$$route.data.requireLogin;
        sessionManager.verify(function(err, res) {
            if(err && _requireLogin) {
                event.preventDefault();
                //$location.path('/login');
                $rootScope.$broadcast('unauthorized');
            }
        });
        if(storageManager.getSession() !== null) {
            $rootScope.authorized = true;
        } else {
            $rootScope.authorized = false;
        }
    });

    $rootScope.$on('authorized', function() {
        //$scope.session = storageManager.getSession();
        $location.path('/map');
    });

    $rootScope.$on('unauthorized', function() {
        storageManager.setSession(null);
        $location.path('/login');
    });
}]);
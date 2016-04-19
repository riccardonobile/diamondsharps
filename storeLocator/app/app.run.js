storeLocator.run(['$rootScope', '$location', 'storageManager', 'sessionManager', function($rootScope, $location, storageManager, sessionManager) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        console.log(next);
        var _requireLogin = next.$$route.data.requireLogin;
        sessionManager.verify(function(err, res) {
            if(err && _requireLogin) {
                event.preventDefault();
                $location.path('/login');
            }
        });
    });

    $rootScope.$on('authorized', function() {
        //$scope.session = storageManager.getSession();
    });

    $rootScope.$on('unauthorized', function() {
        storageManager.setSession(null);
        $location.path('/login');
    });
}]);
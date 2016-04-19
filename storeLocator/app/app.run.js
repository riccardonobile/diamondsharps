storeLocator.run(['$rootScope', '$location', 'storageManager', function($rootScope, $location ,storageManager) {
    $rootScope.$on('$routeChangeStart', function(event, toState, toParams) {
        var requireLogin = toState.data.requireLogin;

        if (requireLogin && storageManager.getSession() === null) {
            event.preventDefault();
            $location.path('/login');
        }
    });

    $rootScope.$on('authorized', function() {
        //$scope.session = storageManager.getSession();
    });

    $rootScope.$on('unauthorized', function() {
        storageManager.setSession(null);
        $location.path('/login');
    });
}]);
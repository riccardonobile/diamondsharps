storeLocator.controller('mainController', ['$rootScope', '$scope', '$location', 'authManager', 'storageManager', function ($rootScope, $scope, $location, authManager, storageManager) {

    $scope.logout = function() {
        authManager.logout(function(err, resp) {
            $scope.session = storageManager.setSession(null);
            $location.url('/login');
        });
    };

    $rootScope.$on('authorized', function() {
        $scope.session = storageManager.getSession();
    });

    $rootScope.$on('unauthorized', function() {
        $scope.session = storageManager.setSession(null);
        $location.url('/login');
    });

    $scope.session = storageManager.getSession();
}]);

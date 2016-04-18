storeLocator.controller('mainController', ['$rootScope', '$scope', '$location', 'authManager', 'storageManager', function ($rootScope, $scope, $location, authManager, storageManager) {

    $scope.logout = function() {
        authManager.logout(function(err, resp) {
            $scope.session = storageManager.setSession(null);
            $location.url('/login');
        });
    };

    $rootScope.$on('authorized', function() {
        $scope.session = storageManager.getSession();
        console.log("login");
    });

    $rootScope.$on('unauthorized', function() {
        $scope.session = storageManager.setSession(null);
        $location.url('/login');
        console.log("no login");
    });

    $scope.session = storageManager.getSession();
}]);

storeLocator.controller('mainController', ['$rootScope', '$scope', '$location', 'authManager', 'storageManager', function ($rootScope, $scope, $location, authManager, storageManager) {
    $scope.logout = function() {
        authManager.logout(function(err, resp) {
            storageManager.setSession(null);
            $location.url('/login');
        });
        return false;
    };
}]);

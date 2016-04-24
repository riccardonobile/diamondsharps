storeLocator.controller('mainController', ['$rootScope', '$scope', '$location', 'authManager', 'storageManager', 'mapManager', function ($rootScope, $scope, $location, authManager, storageManager, mapManager) {
    $scope.logout = function() {
        authManager.logout(function(err, resp) {
            //storageManager.setSession(null);
            $rootScope.$broadcast('unauthorized');
        });
    };

    $scope.centerMap = mapManager.centerMap;
}]);

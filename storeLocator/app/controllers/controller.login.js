storeLocator.controller('loginController', ['$scope', '$rootScope', '$location', 'authManager', 'storageManager', function($scope, $rootScope, $location, authManager, storageManager) {
    if (storageManager.getSession() !== null) {
        $location.url('/');
    }
    $scope.login = function() {
        authManager.login($scope.user.email, $scope.user.password, function(err, resp) {
            if(!err) {
                storageManager.setSession(resp);
                $rootScope.$broadcast('authorized');
                $location.url('/');
            }
        });
    }
}]);

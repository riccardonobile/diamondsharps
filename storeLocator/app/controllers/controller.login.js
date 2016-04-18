storeLocator.controller('loginController', ['$scope', '$rootScope', '$location', 'authManager', 'storageManager', function($scope, $rootScope, $location, authManager, storageManager) {
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

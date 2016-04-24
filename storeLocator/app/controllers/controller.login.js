storeLocator.controller('loginController', ['$scope', '$rootScope', '$location', '$mdToast', 'authManager', 'storageManager', function($scope, $rootScope, $location, $mdToast,authManager, storageManager) {
    if (storageManager.getSession() !== null) {
        $location.url('/');
    }
    $scope.login = function() {
        authManager.login($scope.user.email, $scope.user.password, function(err, resp) {
            if(!err) {
                storageManager.setSession(resp);
                $rootScope.$broadcast('authorized');
                // $location.url('/');
            } else {
                $mdToast.show($mdToast.simple().textContent("Ops, there was an error while trying to login: " + resp.errorMessage));
            }
        });
    }
}]);

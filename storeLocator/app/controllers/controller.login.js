storeLocator.controller('loginController', ['$scope', '$rootScope', '$location', '$mdDialog', 'authManager', 'storageManager', function($scope, $rootScope, $location, $mdDialog, authManager, storageManager) {
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
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('Error while login')
                        .textContent(resp.errorMessage)
                        .ariaLabel('Error while login')
                        .ok('Ok')
                );
            }
        });
    }
}]);

storeLocator.controller('storesListController', ['$scope', 'storeManager', function($scope, storeManager) {
    $scope.loading = true;
    storeManager.getAll(function(err, resp) {
        $scope.loading = false;

        if(!err) {
            $scope.stores = resp;
        }
    });
}]);

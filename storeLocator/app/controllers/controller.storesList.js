storeLocator.controller('storesListController', ['$scope', 'storeManager', function($scope, storeManager) {
    storeManager.getAll(function(err, resp) {
        if(!err) {
            $scope.stores = resp;
        }
    });
}]);

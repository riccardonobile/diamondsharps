storeLocator.controller('storesController', ['$scope', 'storeManager', function($scope, storeManager) {
    $scope.listStores = function() {
        storeManager.getAll(function(err, resp) {
            if(!err) {
                console.log(resp);
            }
        });
    }
}]);

storeLocator.controller('storesController', ['$scope', 'storeManager', function($scope, storeManager) {
    $scope.listStore = function() {
        storeManager.getAll(function(err, resp) {
            if(!err) {
                console.log(resp);
            }
        });
    }
}]);

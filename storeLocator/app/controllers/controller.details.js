storeLocator.controller('detailsController', ['$scope', '$routeParams', 'storeManager', function($scope, $routeParams, storeManager) {
    var _guid = $routeParams.guid;
    $scope.loading = true;
    storeManager.get(_guid, function(err, resp) {
        if(!err) {
            $scope.store = resp;
        }
        $scope.loading = false;
    });
}]);

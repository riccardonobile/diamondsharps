storeLocator.controller('detailsController', ['$scope', '$routeParams', 'storeManager', 'mapManager', '$geolocation', function($scope, $routeParams, storeManager, mapManager, $geolocation) {
    var _guid = $routeParams.guid;
    $scope.loading = true;
    storeManager.get(_guid, function(err, resp) {
        if(!err) {
            $scope.store = resp;
            $geolocation.getCurrentPosition({
                timeout: 60000
            }).then(function(position) {
                $scope.driveTo = mapManager.getDriveTo(
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    },
                    {
                        lat: $scope.store.latitude,
                        lng: $scope.store.longitude
                    }
                );
            });
        }
        $scope.loading = false;
    });
}]);

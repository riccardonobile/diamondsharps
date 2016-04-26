<<<<<<< HEAD
storeLocator.controller('storesListController', ['$scope', 'storeManager', function($scope, storeManager) {
    $scope.loading = true;
=======
storeLocator.controller('storesListController', ['$scope', 'storeManager', '$geolocation', 'mapManager', function($scope, storeManager, $geolocation, mapManager) {
>>>>>>> 4999cb81976b66564746d77cb73e118a92a784d8
    storeManager.getAll(function(err, resp) {
        $scope.loading = false;

        if(!err) {
            $geolocation.getCurrentPosition({
                timeout: 60000
            }).then(function(position) {
                var myCoords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var newResp = [];
                resp.forEach(function(el) {
                    el.distance = parseInt(mapManager.getDistance(
                        myCoords,
                        {
                            lat: el.latitude,
                            lng: el.longitude
                        }
                    ));
                    newResp.push(el);
                });
                $scope.stores = newResp;
            });
        }
    });
}]);

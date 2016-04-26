storeLocator.controller('storesListController', ['$scope', 'storeManager', '$geolocation', 'mapManager', function($scope, storeManager, $geolocation, mapManager) {
    storeManager.getAll(function(err, resp) {
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

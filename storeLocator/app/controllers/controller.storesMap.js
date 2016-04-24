storeLocator.controller('storesMapController', ['$scope', 'storeManager', '$geolocation', function($scope, storeManager, $geolocation) {
    $scope.storesMarkers = [];

    storeManager.getAll(function(err, resp) {
        if(!err) {
            resp.forEach(function(el, key) {
                var marker = {
                    latitude: el.latitude,
                    longitude: el.longitude,
                    id: key
                };
                $scope.storesMarkers.push(marker);
            });
        }
    });

    $geolocation.getCurrentPosition({
        timeout: 60000
    }).then(function(position) {
        console.log("Position", position);
    });

}]);

storeLocator.controller('storesMapController', ['$scope', 'storeManager', '$geolocation', 'mapManager', function($scope, storeManager, $geolocation, mapManager) {
    $scope.storesMarkers = [];

    $geolocation.getCurrentPosition({
        timeout: 60000
    }).then(function(position) {
        mapManager.makeMap(mapManager.placeMarkers, document.getElementById('map'), {
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            zoom: 8,
            disableDefaultUI: true,
            zoomControl: true
        }, storeManager.getAll);
    });

}]);

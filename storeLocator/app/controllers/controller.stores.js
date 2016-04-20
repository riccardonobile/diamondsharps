storeLocator.controller('storesController', ['$scope', 'storeManager', 'uiGmapGoogleMapApi', '$geolocation', function($scope, storeManager, uiGmapGoogleMapApi, $geolocation) {
    storeManager.getAll(function(err, resp) {
        if(!err) {
            $scope.stores = resp;

            $scope.storesMarkers = [];

            $scope.stores.forEach(function(el, key) {
                var marker = {
                    latitude: el.latitude,
                    longitude: el.longitude,
                    id: key
                };
                $scope.storesMarkers.push(marker);
            });
        }
    });

    $geolocation.watchPosition({
        timeout: 60000,
        maximumAge: 250,
        enableHighAccuracy: true
    });

    $scope.myPosition = $geolocation.position;

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.$watch('myPosition.coords', function (newValue, oldValue) {
            if (newValue !== undefined) {
                $scope.storesMap = {
                    center: {
                        latitude: newValue.latitude,
                        longitude: newValue.longitude
                    },
                    zoom: 4
                };
            }
        }, true);
    });
}]);

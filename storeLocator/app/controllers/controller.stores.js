storeLocator.controller('storesController', ['$scope', 'storeManager', 'uiGmapGoogleMapApi', '$geolocation', function($scope, storeManager, uiGmapGoogleMapApi, $geolocation) {
    $scope.listStores = function() {
        storeManager.getAll(function(err, resp) {
            if(!err) {
                console.log(resp);
            }
        });
    };


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
                    zoom: 10
                };
            }
        }, true);
    });
}]);

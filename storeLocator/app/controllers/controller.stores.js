storeLocator.controller('storesController', ['$scope', 'storeManager', 'uiGmapGoogleMapApi', function($scope, storeManager, uiGmapGoogleMapApi) {
    $scope.listStores = function() {
        storeManager.getAll(function(err, resp) {
            if(!err) {
                console.log(resp);
            }
        });
    };


    uiGmapGoogleMapApi.then(function(maps) {
        console.log(maps);
        $scope.storesMap = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
}]);

storeLocator.controller('storesListController', ['$scope', 'storeManager', 'uiGmapGoogleMapApi', '$geolocation', function($scope, storeManager, uiGmapGoogleMapApi, $geolocation) {
    storeManager.getAll(function(err, resp) {
        if(!err) {
            $scope.stores = resp;
        }
    });
}]);

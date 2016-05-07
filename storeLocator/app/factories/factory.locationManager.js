storeLocator.factory('locationManager', ['appConfig', '$rootScope','$geolocation', function(appConfig, $rootScope, $geolocation) {
    var location_manager = {};

    location_manager.available = false;
    location_manager.noPosition = false;

    location_manager.myPosition = {
        lat: 41.87194,
        lng: 12.56738
    };

    $geolocation.getCurrentPosition({
        timeout: 60000
    }).then(function(position) {
        console.log(position);
        location_manager.myPosition.lat = position.coords.latitude;
        location_manager.myPosition.lng = position.coords.longitude;
        location_manager.available = true;
        $rootScope.$broadcast('positionAvailable');
    }).catch(function(reason) {
        console.log(reason);
        var city = promptUser();
        if (city != '') {
            resolveCity(city);
        } else {
            location_manager.noPosition = true;
            location_manager.available = true;
            $rootScope.$broadcast('positionAvailable');
        }
    });

    var promptUser = function() {
        return prompt("It seems that you don't give the authorization to get your current position. Please type your city here");
    };

    var resolveCity = function (city) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': city}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                location_manager.myPosition.lat = results[0].geometry.location.lat();
                location_manager.myPosition.lng = results[0].geometry.location.lng();
                location_manager.available = true;
                $rootScope.$broadcast('positionAvailable');
            } else {
                location_manager.noPosition = true;
                location_manager.available = true;
                $rootScope.$broadcast('positionAvailable');
            }
        });
    };

    $rootScope.$on('noPosition', function() {
        alert('No position available. Using default position')
    });

    return location_manager;
}]);
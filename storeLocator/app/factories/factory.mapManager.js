storeLocator.factory('mapManager', ['appConfig', function(appConfig) {
    var map_manager = {};

    map_manager.makeMap = function (callback, domElement, config, dataHandler) {
        var map = new google.maps.Map(domElement, config);
        if (map !== undefined) {
            callback(false, null, map, dataHandler);
        } else {
            callback(true);
            return false;
        }
    };

    map_manager.placeMarkers = function (err, callback, map, dataHandler) {
        if(!err) {
            dataHandler(function(err, resp) {
                resp.forEach(function (el) {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: {
                            lat: parseFloat(el.latitude),
                            lng: parseFloat(el.longitude)
                        },
                        title: el.name
                    });
                    var infowindow = new google.maps.InfoWindow({
                        content: el.name
                    });
                    marker.addListener('click', function() {
                        map.setZoom(15);
                        map.setCenter(marker.getPosition());
                        infowindow.open(map, marker);
                    });
                });
            });
        }
    };

    return map_manager;
}]);
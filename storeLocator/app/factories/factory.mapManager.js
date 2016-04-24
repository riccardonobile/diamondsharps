storeLocator.factory('mapManager', ['appConfig', function(appConfig) {
    var map_manager = {};

    map_manager.makeMap = function (callback, domElement, config, dataHandler) {
        map_manager.config = config;
        map_manager.map = new google.maps.Map(domElement, map_manager.config);
        if (map_manager.map !== undefined) {
            callback(false, null, dataHandler);
        } else {
            callback(true);
            return false;
        }
    };

    map_manager.placeMarkers = function (err, callback, dataHandler) {
        if(!err) {
            dataHandler(function(err, resp) {
                resp.forEach(function (el) {
                    var marker = new google.maps.Marker({
                        map: map_manager.map,
                        position: {
                            lat: parseFloat(el.latitude),
                            lng: parseFloat(el.longitude)
                        },
                        title: el.name
                    });

                    var infowindow = new google.maps.InfoWindow({
                        content: '<span class="md-headline">' + el.name + '</span><br>' +
                        '<span class="md-subhead">' + el.address + '</span><br>' +
                        '<span class="md-subhead">' + el.phone + '</span><br>' +
                        '<a href="#/details/' + el.guid + '">More details</a>'
                    });

                    marker.addListener('click', function() {
                        map_manager.map.setZoom(15);
                        map_manager.map.setCenter(marker.getPosition());
                        infowindow.open(map_manager.map, marker);
                    });
                });
            });
        }
    };

    map_manager.centerMap = function() {
        map_manager.map.setOptions(map_manager.config);
    };

    return map_manager;
}]);
storeLocator.service('storageManager', ['$localStorage', function($localStorage) {
    var storage_manager = {};

    storage_manager.setSession = function(sessionData) {
        $localStorage.sessionData = sessionData;
    };

    storage_manager.getSession = function() {
        return $localStorage.sessionData;
    };

    return storage_manager;
}]);

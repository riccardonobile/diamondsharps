storeLocator.service('openStore', [ function() {
    this.openStore = {};

    this.set = function(obj) {
        this.openStore = obj;
    };

    this.get = function() {
        if(this.isValid()) {
            return this.openStore;
        }
        return undefined;
    };

    this.isValid = function() {
        return ((this.openStore !== undefined) && (_.key(this.openStore)||[]).length > 0);
    };

    this.clear = function() {
        this.openStore = {};
    }
}]);

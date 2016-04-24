storeLocator.service('storesService', [ function() {
    this.stores = {};

    this.set = function(obj) {
        this.stores = obj;
    };

    this.get = function() {
        if(this.isValid()) {
            return this.stores;
        }
        return undefined;
    };

    this.isValid = function() {
        return ((this.stores !== undefined) && (_.keys(this.stores)||[]).length > 0);
    };

    this.clear = function() {
        this.stores = {};
    }
}]);

// app.js (app)

var storeLocator = angular.module('storeLocator', ['ngCookies']);

storeLocator.constant('requestUrl', {
    auth: {
        protocol: 'http',
        host: 'its-bitrace.herokuapp.com'
    },
    data: {
        protocol: 'http',
        host: ''
    }
});

storeLocator.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});


// map.js (controller)

storeLocator.controller('mapController', function($scope, $cookie) {

});
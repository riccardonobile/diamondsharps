storeLocator.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/view.stores.html',
        controller: 'storesController',
        data: {
            requireLogin: true
        }
    }).when('/details', {
        templateUrl: 'app/views/view.details.html',
        controller: 'detailsController',
        data: {
            requireLogin: true
        }
    }).when('/login', {
        templateUrl: 'app/views/view.login.html',
        controller: 'loginController',
        data: {
            requireLogin: false
        }
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(false);
    $httpProvider.interceptors.push('authInterceptor');
}]);
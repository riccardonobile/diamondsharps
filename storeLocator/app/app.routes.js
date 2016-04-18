storeLocator.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/view.stores.html',
        controller: 'storesController'
    }).when('/details', {
        templateUrl: 'app/views/view.details.html',
        controller: 'detailsController'
    }).when('/login', {
        templateUrl: 'app/views/view.login.html',
        controller: 'loginController'
    }).otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(false);
    $httpProvider.interceptors.push('authInterceptor');
}]);
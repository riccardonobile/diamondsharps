storeLocator.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/map', {
        templateUrl: 'app/views/view.storesMap.html',
        controller: 'storesMapController',
        data: {
            requireLogin: true
        }
    }).when('/list', {
        templateUrl: 'app/views/view.storesList.html',
        controller: 'storesListController',
        data: {
            requireLogin: true
        }
    }).when('/details/:guid', {
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
        redirectTo: '/map'
    });
    $locationProvider.html5Mode(false);
    $httpProvider.interceptors.push('authInterceptor');
}]);
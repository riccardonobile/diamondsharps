storeLocator.controller('headController', ['$scope', 'headColorService', function($scope, headColorService) {
    $scope.theme = headColorService;
}]);

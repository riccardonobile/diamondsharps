incanevaApp.controller('mainController', ['$scope', '$http', '$httpParamSerializerJQLike', function($scope, $http, $httpParamSerializerJQLike) {

    var apiUrl = 'http://incaneva.it/wp-admin/admin-ajax.php';
    var apiData = {
        action: 'incaneva_events',
        blog: '1,6,7,8',
        old: true
    };

    $scope.loading = true;

    $http({
        url: apiUrl,
        method: 'POST',
        data: $httpParamSerializerJQLike(apiData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(resp) {
        if(resp.data.success) {
            $scope.events = resp.data.data;
        } else {

        }
    }, function(err) {

    }).finally(function() {
        $scope.loading = false;
    });
}]);

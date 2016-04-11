incanevaApp.controller('mainController', ['$scope', '$http', '$httpParamSerializerJQLike', '$uibModal', function($scope, $http, $httpParamSerializerJQLike, $uibModal) {

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
            console.log(resp.data);
        } else {

        }
    }, function(err) {

    }).finally(function() {
        $scope.loading = false;
    });

    $scope.endEqualsStart = function (startDate, endDate) {
        if (startDate == endDate) {
            return true;
        }
    };

    $scope.openDetails = function(event, size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'app/views/modal.view.html',
            controller: 'modalController',
            size: size,
            resolve: {
                event: function () {
                    return event;
                }
            }
        });
    }
}]);

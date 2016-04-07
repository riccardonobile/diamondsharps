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

    $scope.openEvent = function(size) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'app/views/details.modal.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    }
}]);

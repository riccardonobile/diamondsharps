incanevaApp.controller('modalController', ['$scope', '$uibModalInstance', 'event', function($scope, $uibModalInstance, event) {

    $scope.event = event;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.sanitize = function(content) {
        return content.replace(/\n\r/g, '<br>');
    };
}]);
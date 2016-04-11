incanevaApp.controller('modalController', ['$scope', '$uibModalInstance', 'event', '$sce',function($scope, $uibModalInstance, event, $sce) {

    $scope.event = event;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.sanitize = function(content) {
        return $sce.trustAsHtml(content.replace(/\n\r/g, '<br>'));
    };
}]);
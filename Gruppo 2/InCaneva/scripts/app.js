/**
 * Created by Simone Cragnolini on 07/04/2016.
 */

var app = angular.module('incanevaApp', []);

app.controller('main', function ($scope, $http) {
    
    var json;
    
    $scope.loadData = function (blog, old, limit, offset, filter) {

        var postString = "action=incaneva_events&blog="+blog+"&old="+old+"&limit="+limit+"&offset="+offset+"&filter="+filter;

        $http.post("http://incaneva.it/wp-admin/admin-ajax.php", postString, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
            .then(function (result) {
                json = result.data.data;
            });

    };
    
    $scope.filterByDate = function (month) {
        json.forEach(function (el) {
            if(el.post_month_numerical)
        })
    }
    
    $scope.loadData("1,6,7,8", "", "", "", "");

});
/**
 * Created by Simone Cragnolini on 07/04/2016.
 */

var app = angular.module('incanevaApp', []);

app.controller('main', function ($scope, $http) {
    
    $scope.loadData = function (blog, old, limit, offset, filter) {

        var postString = "action=incaneva_events&blog="+blog+"&old="+old+"&limit="+limit+"&offset="+offset+"&filter="+filter;

        $http.post("http://incaneva.it/wp-admin/admin-ajax.php",postString,{
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
            .then(function (result) {
                var json = result.data.data;
                console.log(json);
            });

    };
    
    $scope.loadData("1,6,7,8", "", "", "", "");

});
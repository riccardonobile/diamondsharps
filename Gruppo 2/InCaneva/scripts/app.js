/**
 * Created by Simone Cragnolini on 07/04/2016.
 */

var app = angular.module('incanevaApp', []);

app.controller('main', function ($scope, $http) {
    
    var json;
    var currentMonth = new Date().getMonth() + 1;

    $scope.year = 2016;
    $scope.events = [];
    
    $scope.loadData = function (blog, old, limit, offset, filter) {

        var postString = "action=incaneva_events&blog="+blog+"&old="+old+"&limit="+limit+"&offset="+offset+"&filter="+filter;

        $http.post("http://incaneva.it/wp-admin/admin-ajax.php", postString, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
            .then(function (result) {
                json = result.data.data;
                $scope.filterByDate(currentMonth);
            });

    };

    $scope.changeYear = function (year) {
        $scope.year = year;
    };

    $scope.filterByDate = function (month) {
        if(json != undefined) {
            $scope.events = [];
            json.forEach(function (el) {
                if(month == el.post_month_numerical && $scope.year == el.post_year) {
                    $scope.events.push(el)
                }
            });

            console.log($scope.events);
        }

        if($scope.events.length == 0) {

            
        }
    };


    
    $scope.loadData("1,6,7,8", "true", "", "", "");

});
var app = angular.module('MyApp', []);
app.controller('MyController', ['$scope', '$http', function ($scope, $http) {
    $http.get('test.html')
        .success(function (data) {
            $scope.components = data.components;
            console.log($scope.components);
        });
    $scope.rendering = function () {
        //alert("working");
        for (var i = 0; i < $scope.components.length; i++) {
            if ($scope.components[i].options === undefined) {
                continue;
            }
            else {
                //console.log($scope.components[i].options[0])
            }
            if ($scope.selectedOption) {
                $scope.components[i].value = $scope.selectedOption;
                console.log($scope.components[i].value);
            }
        }
    };

    $scope.selectOption = function (a) {
        $scope.selectedOption = a;
        console.log($scope.selectedOption);
        $scope.rendering();
        $scope.checkingChanges = function () {
            //var result  = $scope.components.filter(function(o){return o.b == value;} );
        }
    }
}]);


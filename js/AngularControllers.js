var myApp = angular.module('myApp', ["ngRoute"]);

myApp.controller('WorksController', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = 'Hola!';
    $scope.Init = function(){
        console.log($scope.greeting);
    }
    $http.get("/data/projects.json").then((response) => {
        $scope.testText = response.data;
        console.log(response.data);
    });
}]);
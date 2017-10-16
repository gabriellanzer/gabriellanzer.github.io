var myApp = angular.module('myApp', ["ngRoute"]);

myApp.controller('WorksController', ['$scope', '$http', function($scope, $http) {
    
    //Get projects JSON and 
    $http.get("/data/projects.json").then((response) => {
        $scope.projects = response.data;
        console.log(response.data);
    });
    
    //Variable to control which project is currently enabled
    $scope.selectedWork = "";
    
    //Function to change selected project
    $scope.selectProject = function(project, event) {
        
        //Set selected project flag
        $scope.projects.forEach(function(entry) {
            entry.selected = (entry.name == project);
        });
    }
    
}]);
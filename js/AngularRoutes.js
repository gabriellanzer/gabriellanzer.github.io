var app = angular.module("myApp");

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "about.html"
    })
    .when("/works", {
        templateUrl : "works.html",
        controller: "WorksController"
    })
    .when("/about", {
        templateUrl : "about.html"
    });
});

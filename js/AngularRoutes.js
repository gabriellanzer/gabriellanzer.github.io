var app = angular.module("myApp");

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "works.html",
        controller: "WorksController"
    })
    .when("/works", {
        templateUrl : "works.html",
        controller: "WorksController"
    })
    .when("/about", {
        templateUrl : "about.html"
    });
});
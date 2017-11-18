var app=angular.module('myApp', ["ngRoute"]);

app.config(function ($routeProvider) {
             
            $routeProvider.when('/index', {
                templateUrl: '/index.html',
                controller: 'appCtrl'
            }).when('/single', {
                templateUrl: 'single.html',
                controller: 'singleCtrl'
            }).when('/create', {
                templateUrl: 'create.html',
                controller: 'createCtrl'
            }).otherwise({
                redirectTo: "index"
            });
});


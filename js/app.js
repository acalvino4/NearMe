var app = angular.module('NearMe',['leaflet-directive','ngRoute'])

app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/welcome', {
        controller: 'WelcomeController',
        templateUrl: 'views/welcome.html'
    })
    .when('/map', {
        controller: 'MapController',
        templateUrl: 'views/map.html'
    })
    .when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    })
    .otherwise({
        redirectTo: '/welcome'
    })
})
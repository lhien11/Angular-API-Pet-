var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'DogController',
            controllerAs: 'dc'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'CatController',
            controllerAs: 'cc'
        })
        .when('/fluffy', {
            templateUrl: '/views/templates/fluffy.html',
            controller: 'FluffyController',
            controllerAs: 'fc'
        })
        .otherwise({
            redirectTo: '/dogs'
        });

}]);

(function() {
    'use strict';

    angular
        .module('app')
        .config(config)

    function config($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl : "/views/country.view.html"
        })
        .when('/country', {
            templateUrl : "/views/country.view.html"
        })
        .when('/city', {
            templateUrl : "/views/city.view.html"
        })
        .when('/language', {
            templateUrl : "/views/language.view.html"
        });
    };
})();
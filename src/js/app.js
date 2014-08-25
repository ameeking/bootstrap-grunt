var app = angular.module('website', ['ngRoute']);
  
app.config(function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl:'partials/home.html'}).
    when('/about', {templateUrl:'partials/about.html'}).
    when('/contact', {templateUrl:'partials/contact.html'}).
    otherwise({redirectTo:'/', templateUrl:'partials/home.html'});
  }
);
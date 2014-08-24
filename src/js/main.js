var app = angular.module('website', ['ngRoute']);
  
app.config(function($routeProvider) {
    $routeProvider.
      when('/about', {templateUrl:'partials/about.html'}).
      when('/contact', {templateUrl:'partials/contact.html'}).
      otherwise({redirectTo:'/home', templateUrl:'partials/home.html'});
  }
);

function MainCtrl($scope, $location) {
  $scope.setRoute = function(route) {
    $location.path(route); 
  }
}

app.directive('navMenu', function($location) {
  return function(scope, element, attrs) {
    var links = element.find('a'),
        onClass = attrs.navMenu || 'active',
        routePattern,
        link,
        url,
        currentLink,
        urlMap = {},
        i;

    if (!$location.$$html5) {
      routePattern = /^#[^/]*/;
    }

    for (i = 0; i < links.length; i++) {
      link = angular.element(links[i]);
      url = link.attr('href');

      if ($location.$$html5) {
        urlMap[url] = link;
      } else {
        urlMap[url.replace(routePattern, '')] = link;
      }
    }

    scope.$on('$routeChangeStart', function() {
      var pathLink = urlMap[$location.path()];

      if (pathLink) {
        if (currentLink) {
          currentLink.parent('li').removeClass(onClass);
        }
        currentLink = pathLink;
        currentLink.parent('li').addClass(onClass);
      }
    });
  };
});
function MainCtrl($scope, $location) {
  $scope.setRoute = function(route) {
    $location.path(route); 
  }
}
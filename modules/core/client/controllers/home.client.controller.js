'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
  }
]);


angular.module('core').controller('MainController', ['$scope', '$timeout',
  function MainController($scope, $timeout) {
    var slidesInSlideshow = 3;
    var slidesTimeIntervalInMs = 3000; 
  
    $scope.slideshow = 1;
    var slideTimer =
    $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);
  }
]);
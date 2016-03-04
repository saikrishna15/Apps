'use strict';

/**
 * @ngdoc function
 * @name curlGApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the curlGApp
 */
angular.module('curlGApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

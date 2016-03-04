'use strict';

/**
 * @ngdoc function
 * @name curlGApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the curlGApp
 */
angular.module('curlGApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

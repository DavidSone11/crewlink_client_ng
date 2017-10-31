' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('loginCtrl', function ($scope, $position, toaster, $location,$base64) {

    console.log("dadsa");

    $scope.login = function (username, password) {

      if (username == 'admin' && password == 'admin') {
        $scope.encoded = $base64.encode(username+password);
        $scope.decoded = $base64.decode( $scope.encoded);
        $location.url("dashboard.home");

      }

    };


  });

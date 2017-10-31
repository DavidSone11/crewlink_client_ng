' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('loginCtrl', function ($scope, $position, toaster, $location, $base64) {


    $scope.isLoginUser = false;
    $scope.isLoginPassword = false;

    $scope.userobj = {
      'username': '',
      'password': ''

    };

    $scope.login = function () {

      if ($scope.userobj.username == 'admin') {
        $scope.isLoginUser = false;
      } else {
        $scope.isLoginUser = !$scope.isLoginUser;
      }

      if ($scope.userobj.password == 'admin') {
        $scope.isLoginPassword = $scope.isLoginPassword;
      } else {
        $scope.isLoginPassword = !$scope.isLoginPassword;
      }

      $location.url("dashboard.home");



    };


  });

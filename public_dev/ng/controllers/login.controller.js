' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('LoginController', function ($scope, toaster, $location, $base64) {


    $scope.isLoginUser = false;
    $scope.isLoginPassword = false;
    $scope.isUserFieldError = false;
    $scope.isPasswordFieldError = false;
    $scope.colorpallet = ""

    $scope.userobj = {
      'username': '',
      'password': ''

    };

    $scope.inputType = 'password';

    $scope.hideShowPassword = function () {
      if ($scope.inputType == 'password')
        $scope.inputType = 'text';
      else
        $scope.inputType = 'password';
    };

    $scope.login = function () {
      
      if ($scope.userobj.username == 'admin' && $scope.userobj.password=='admin') {
        $location.path("/dashboard/home");
        //$window.location.href = '/index.html';
        // $scope.isLoginUser = false;
        //$scope.isLoginPassword = false;
      } //else {
       // $scope.isLoginUser = !$scope.isLoginUser;
       // $scope.isLoginPassword = !$scope.isLoginPassword;
      //}

     // if ($scope.userobj.password == 'admin') {
      //  $scope.isLoginPassword = false;
     // } else {
       // $scope.isLoginPassword = !$scope.isLoginPassword;
     // }

    };

    $scope.checkUser = function () {

      if ($scope.userobj.username == "" || typeof ($scope.userobj.username) == 'undefined') {
        $scope.isUserFieldError = true;
        $scope.isPasswordFieldError = false;
      } else if ($scope.userobj.username !== "" || typeof ($scope.userobj.username) !== 'undefined') {
        $scope.isUserFieldError = false;
      }
    };

    $scope.CheckPassowrd = function () {
      if ($scope.userobj.password == "" || typeof ($scope.userobj.password) == 'undefined') {
        $scope.isPasswordFieldError = true;
      } else if ($scope.userobj.password !== "" || typeof ($scope.userobj.password) !== 'undefined') {
        $scope.isPasswordFieldError = false;
      }
    };




  });

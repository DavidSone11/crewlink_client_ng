' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the crewLinkNgApp
 */
var app = angular.module("crewLinkNgApp");
app.controller("LoginController", ['$scope', '$state', 'toaster', '$location', '$http', '$q', 'Flash', function ($scope, $state, toaster, $location, $http, $q, Flash) {
    $scope.userobj = {
        'username': '',
        'password': ''
    };
    $scope.type = 'password';
    var choices = { 'password': 'password', 'text': 'text' };
    $scope.isChange = false;

    $scope.changePasswordType = function () {
        if ($scope.userobj.password === 'undefined' || $scope.userobj.password === '') {
            Flash.create('danger', 'Invalid Password', 'large-text');
            return;
        }
        if (!angular.isObject($scope.type)) {
            /// logic :1 
            if ($scope.type === choices["password"])
                $scope.type = choices["text"];
            else
                $scope.type = choices["password"];


            /// logic :2

            // Object.keys(choices).map(function (key) {
            //   console.log(choices[key]);
            //  if ($scope.type === choices[key]) {
            //    $scope.type = choices[key];
            // } else {
            //   $scope.type = choices[key];
            // }
            // })



        }

    };
    $scope.login = function () {
        if (!($scope.userobj.username === '' && $scope.userobj.password === '')) {
            if ($scope.userobj.username === 'admin' && $scope.userobj.password === 'admin') {
                $location.path('/dashboard/home');
            } else {
                Flash.create('danger', 'Username & Password Invalid Password', 'large-text');
            }
        } else {
            Flash.create('danger', 'Username & Password Invalid Password', 'large-text');
        }

    }

}]);
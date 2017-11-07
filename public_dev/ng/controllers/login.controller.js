' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the crewLinkNgApp
 */
var app = angular.module("crewLinkNgApp");
app.controller("LoginController", ['$scope', '$state', 'toaster', '$location', '$http', '$q', function ($scope, $state, toaster, $location, $http, $q, ) {



    $scope.userobj = {
        'username':'',
        'password':''        
    };
    $scope.type = 'password';
    var choices = { 'password': 'password', 'text': 'text' };
    $scope.isChange = false;

    $scope.changePasswordType = function () {
        if (angular.isDefined($scope.userobj.password)) {
            return '';
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
        $location.path('/dashboard/userPlans');
    }

}]);
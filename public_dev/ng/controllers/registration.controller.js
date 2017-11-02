' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:registrationCtrl
 * @description
 * # loginCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
    .controller('registrationCtrl', function ($scope, $position, toaster, $location, $http) {


        $scope.roles = [
            { 'name': 'admin' },
            { 'name': 'guest' },
            { 'name': 'super' },
            { 'name': 'user' }
        ];

        $scope.genders = [
            { 'name': 'male' },
            { 'name': 'female' },
            { 'name': 'others' },

        ];

        $scope.userRegisteration = {};

        console.log($scope.userRegisteration);

        
       

    });

' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:registrationCtrl
 * @description
 * # loginCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
    .controller('registrationCtrl',['$scope','$state','$position', 'toaster', '$location', '$http', function ($scope,$state, $position, toaster, $location, $http) {

        $scope.userRegisteration = {};
        $scope.checkstatus = false;
        $scope.users = [];

        
        $scope.string = $state.current.name;
        $scope.title = $scope.string.currentTitle('.','>');

        $scope.updateOn = function(){
            console.log("DASDA");
        }

       

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

        $scope.register = function () {
            console.log(""+ $scope.userRegisteration);
        }



        $scope.getUsers = function () {
            var url = "http://localhost:8000/mongo/api/v1/users";
            var options = {
                limit: 50,
                page: 1,
                order: 'userName'
            };

            $http.get(url, { params: options }).then(function success(successResponse) {
                $scope.users = successResponse.data.results;
                $scope.currentPage = successResponse.data.current;
                $scope.perPage = successResponse.data.options.perPage;
                $scope.totalPages = successResponse.data.last;
                $scope.totalRecords = successResponse.data.count;

            }, function error(errorResponse) {

            });

        };
        $scope.getUsers();


        $scope.removeUser = function (user) {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        };



        console.log($scope.checkstatus);



    }]);

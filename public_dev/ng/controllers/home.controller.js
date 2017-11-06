' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('HomeController', function ($scope, toaster, apiService) {
     $scope.query = {
      limit: 10,
      page: 1,
      order: 'userName'
    }
    apiService.fetch("http://localhost:8000/mongo/api/v1/users/",$scope.query).then(function successCallback(response){

    $scope.userLists = response.data.results;

    },function errorCallback(response){

    });


  });

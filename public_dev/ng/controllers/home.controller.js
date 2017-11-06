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

    $scope.userLists = [];
    $scope.query = {
      limit: 10,
      page: 1,
      order: 'userName'
    }
    apiService.fetch("http://localhost:8000/mongo/api/v1/users/", $scope.query).then(function successCallback(response) {
      $scope.userLists = response.data.results;
    },function errorCallback(response) {
    });

    $scope.user = {
      userName: 'santosh.citech',
      firstName: 'santosh',
      lastName: 'sahu',
      password: '123456',
      email: 'santosh.citech@gmail.com',
      roleCode: 'admin',
      userProfile: '',
    }
    apiService.create("http://localhost:8000/mongo/api/v1/users", $scope.user).then(function successCallback(response) {
      $scope.userLists = response.data.results;
    },function errorCallback(response) {
    })


    $scope.updateUser = {
      userName: 'santosh_citech',
      firstName: 'santosh',
      lastName: 'sahu',
      password: '123456',
      email: 'santosh.citech@gmail.com',
      roleCode: 'admin',
      userProfile: '',
    }
    var _id="5a00d5c42c539f13ac12f579"
    apiService.update("http://localhost:8000/mongo/api/v1/users/",_id, $scope.updateUser).then(function successCallback(response) {
      $scope.userLists = response.data.results;
    },function errorCallback(response) {
    })

  });

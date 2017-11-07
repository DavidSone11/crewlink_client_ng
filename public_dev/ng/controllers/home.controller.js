' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the crewLinkNgApp
 */
var app = angular.module('crewLinkNgApp')
app.controller('HomeController', function ($scope, toaster, apiService, apiResourceService) {


  apiResourceService.fetchResource('http://localhost:8000/mongo/api/v1/users').then(function successCallback(response) {

    console.log(response);
  });

});

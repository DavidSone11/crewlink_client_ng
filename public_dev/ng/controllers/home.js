' use strict';
/**
 * @ngdoc function
 * @name crewLinkNgApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the crewLinkNgApp
 */
angular.module('crewLinkNgApp')
  .controller('homeCtrl', function ($scope, $position, toaster) {


    $scope.showpopup = function () {
      toaster
        .pop({
          type: 'success',
          title: 'Removed',
          body: 'home Removed Successfully!!!'
        }); 

    };


  });

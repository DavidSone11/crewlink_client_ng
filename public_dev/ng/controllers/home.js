' use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
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

    }


  });

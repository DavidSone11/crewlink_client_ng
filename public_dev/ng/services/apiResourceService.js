

' use strict';
var app = angular.module('crewLinkNgApp');

app.service('apiResourceService', ['$resource', '$q', function ($resource, $q) {
    this.fetchResource = function (apiUrl) {
        var deferred = $q.defer();
        apiUrl = angular.isDefined(apiUrl) ? apiUrl : '';
        if (apiUrl)
            deferred.resolve(apiUrl);
        else
            deferred.reject("ERROR IN RESPONSE!!");
        console.log("fetch");
        return deferred.promise;
    },
        this.createResource = function () {
            console.log("create");
        },

        this.updateResource = function () {
            console.log("update");
        },
        this.deleteResource = function () {
            console.log("delete");
        }

}]);
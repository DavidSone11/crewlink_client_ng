' use strict';
var app = angular.module('crewLinkNgApp')

app.service('apiService', ['$http', '$q', function ($http, $q) {


    return {
        //GET RESOURCE
        fetch: function (apiUrl, options) {
            var deferred = $q.defer();
            apiUrl = angular.isDefined(apiUrl) ? apiUrl : '';
            $http.get(apiUrl, { params: options }, { headers: { 'Content-Type': 'application/json' } }).success(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(response, status, headers, config) {
                deferred.reject(response.data.statusText);
            });
            return deferred.promise;
        },

        //CREATE NEW RESOURCE
        create: function (apiUrl, options) {
            var deferred = $q.defer();
            $http.post(apiUrl, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function successCallback(response) {
                deferred.resolve(response);
            }, function errorCallback(response, status, headers, config) {
                deferred.reject(response.data.statusText);
            });
            return deferred.promise;
        },

        //UPDATE EXISTING RESOURCE
        update: function (apiUrl, parameter, options) {
            var deferred = $q.defer();
            apiUrl = angular.isDefined(apiUrl) ? apiUrl : '';
            $http.put(apiUrl + '/' + parameter.id, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function successCallback(response) {

                deferred.resolve(response);

            }).catch(function (data, status, headers, config) {
                deferred.reject(data.statusText);
            });

            return deferred.promise;

        },

        remove: function (apiUrl, parameter) {
            var deferred = $q.defer();
            apiUrl = angular.isDefined(apiUrl) ? apiUrl : '';
            $http.post(apiBase + '/' + parameter.id, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function successCallback(response) {
                deferred.resolve(response);
            }).catch(function (data, status, headers, config) { // <--- catch instead error
                deferred.reject(data.statusText);
            });

            return deferred.promise;
        }



    }
}]);
angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-ajb.qaalabs.com/';

    return service;
}]);
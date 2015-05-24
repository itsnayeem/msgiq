'use strict';

angular.module('msgiq').config(function ($stateProvider) {
    $stateProvider.state('library', {
        url: '/library',
        templateUrl: 'app/library/library.html',
        controller: 'LibraryCtrl'
    });
});
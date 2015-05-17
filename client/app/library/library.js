'use strict';

angular.module('socialappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('library', {
        url: '/library',
        templateUrl: 'app/library/library.html',
        controller: 'LibraryCtrl'
      });
  });
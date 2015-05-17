'use strict';

angular.module('socialappApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('public', {
        url: '/',
        templateUrl: 'app/public/public.html',
        controller: 'PublicCtrl'
      });
  });
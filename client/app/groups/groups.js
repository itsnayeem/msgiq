'use strict';

angular.module('msgiq')
  .config(function ($stateProvider) {
    $stateProvider
      .state('groups', {
        url: '/groups',
        templateUrl: 'app/groups/groups.html',
        controller: 'GroupsCtrl'
      });
  });
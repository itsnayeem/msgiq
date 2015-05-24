'use strict';

angular.module('msgiq').config(function ($stateProvider) {
    $stateProvider.state('public', {
        url: '/',
        templateUrl: 'app/public/public.html',
        controller: 'PublicCtrl'
    });
});
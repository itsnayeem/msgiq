'use strict';

describe('Controller: PublicCtrl', function () {

  // load the controller's module
  beforeEach(module('msgiq'));

  var PublicCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublicCtrl = $controller('PublicCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

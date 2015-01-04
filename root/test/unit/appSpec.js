describe('{%= title %} application', function () {
  'use strict';

  var ctrl;

  beforeEach(module('{%= name %}'));

  // Loads the controllers
  beforeEach(inject(function ($controller) {
    ctrl = $controller('mainCtrl');
  }));


  it('should have a success message initialized', inject(function () {
    expect(ctrl.message).toBeTruthy();
    expect(ctrl.message).toBe('Yeahhh ! You\'re ready !');
  }));

});
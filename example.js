
/**
 * Example Angular controller
 * Notice that the Angular module to attach to will be passed in:
 * require('example-controller')(app);
 */

module.exports = function(app){
  app.controller('ows-example', ['$scope', function example ($scope){
    $scope.whyThisIsCool = [
      'Angular directives, controllers, services, filters etc are decoupled and reusable',
      'These can be shared across projects easily',
      'Package manager can bring down as dependencies'
    ];
  }]);
};
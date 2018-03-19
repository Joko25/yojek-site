var app = angular.module("yori", ['ngMaterial', 'ngRoute']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(function($mdAriaProvider) {
   // Globally disables all ARIA warnings.
   $mdAriaProvider.disableWarnings();
});

app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('orange');
});
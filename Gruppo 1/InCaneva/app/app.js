var incanevaApp = angular.module('incanevaApp', ['ui.bootstrap', 'angularMoment']);

incanevaApp.run(function(amMoment) {
    amMoment.changeLocale('it');
});
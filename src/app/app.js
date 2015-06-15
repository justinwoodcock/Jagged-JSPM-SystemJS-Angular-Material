import angular from 'angular';

import 'angular-material';

import 'angular-material/angular-material.css!css';

import './app.css!css'

import router from 'oclazyload-systemjs-router';
import futureRoutes from 'app/routes.json!';

var appModule = angular.module('app', ['ngMaterial']);

appModule.config(router(appModule, futureRoutes));

appModule.config(function($locationProvider, $httpProvider, $urlRouterProvider, $mdThemingProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('light-green');
    $httpProvider.useApplyAsync(true);
    return $urlRouterProvider.otherwise('/login');
});

appModule.controller('AppCtrl', function AppCtrl($scope, $log, $state, $mdSidenav) {
    $scope.toggleNav = function(navId) {
        $mdSidenav(navId)
            .toggle()
            .then(function() {
                $log.debug("toggle " + navId + " is done");
            });
    }
});

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;

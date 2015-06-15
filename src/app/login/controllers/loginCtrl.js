import angular from 'angular';

import loginModule from '../loginModule';

loginModule.controller('LoginCtrl', function loginCtrl($scope, $state, $mdToast, $animate) {
    // Temporary login creds that need to get moved to an authentication REST call.
    var creds = {
        email: 'homer@simpson.com',
        password: 'strangleBart'
    };
    $scope.user = {};
    $scope.login = function() {
        if ($scope.user.email === creds.email && $scope.user.password === creds.password) {
            $state.go('user');
        } else {
            $mdToast.show(
                $mdToast.simple()
                .content('Username: homer@simpson.com Password: strangleBart')
                .position(getToastPosition())
                .hideDelay(15000)
            );
        }
    }

    var toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    function getToastPosition() {
        return Object.keys(toastPosition)
            .filter(function(pos) {
                return toastPosition[pos];
            })
            .join(' ');
    };

});

export default loginModule;

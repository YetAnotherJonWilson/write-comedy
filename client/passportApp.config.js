angular.module('passportApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
        .when('/success', {
            templateUrl: '/views/success.html',
            controller: 'WelcomeController',
            controllerAs: 'success'
        })
        .when('/failure', {
            templateUrl: '/views/failure.html'
        })

    $locationProvider.html5Mode(true);
}]);
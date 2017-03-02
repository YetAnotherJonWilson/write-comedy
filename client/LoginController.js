angular.module('comedyApp').controller('LoginController', ['$http', '$location', function($http, $location){
    var vm = this;

    vm.username = '';
    vm.password = '';
    vm.loginError = false;
    vm.registerError = false;
    vm.loginErrorMessage = 'Sorry, Wrong Username/Password';
    vm.registerErrorMessage = 'Sorry, Username taken';

    vm.login = function(){

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/login', sendData).then(handleLoginSuccess, handleLoginFailure);
    };

    function handleLoginSuccess(response){
        $location.path('/success');
    }

    function handleLoginFailure(response){
        $location.path('/');
        vm.loginError = true;
    }

    vm.register = function(){
        // console.log('Username', vm.username);
        // console.log('Password', vm.password);

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/signup', sendData).then(handleRegisterSuccess, handleRegisterFailure);
    };

    function handleRegisterSuccess(response){
        console.log('Success', response);
        $location.path('/');
    }

    function handleRegisterFailure(response){
        console.log('Failure', response);
        vm.registerError = true;
    }

}]);
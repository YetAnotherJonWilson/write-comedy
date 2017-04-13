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

    function handleLoginSuccess(){
        $location.path('/success');
    }

    function handleLoginFailure(){
        $location.path('/');
        vm.loginError = true;
    }

    vm.register = function(){

        var sendData = {};

        sendData.username = vm.registername;
        sendData.password = vm.registerpassword;

        $http.post('/signup', sendData).then(handleRegisterSuccess, handleRegisterFailure);
    };

    function handleRegisterSuccess(response){
        $location.path('/success');
    }

    function handleRegisterFailure(response){
        vm.registerError = true;
    }

}]);
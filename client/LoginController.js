angular.module('comedyApp').controller('LoginController', ['$http', '$location', function($http, $location){
    var vm = this;

    vm.username = '';
    vm.password = '';
    vm.error = false;
    vm.errorMessage = 'Sorry, Wrong Username/Password';

    vm.login = function(){

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/login', sendData).then(handleSuccess, handleFailure);
    };

    function handleSuccess(response){
        $location.path('/success');
    }

    function handleFailure(response){
        $location.path('/');
        vm.error = true;
    }

    vm.register = function(){
        $location.path('/register');
    }

}]);
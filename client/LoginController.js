angular.module('passportApp').controller('LoginController', ['$http', '$location', function($http, $location){
    var vm = this;

    vm.username = '';  //username
    vm.password = ''; //password
    vm.error = false;
    vm.errorMessage = 'Sorry, Wrong Username/Password';

    vm.login = function(){
        console.log('Username', vm.username);
        console.log('Password', vm.password);

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/login', sendData).then(handleSuccess, handleFailure);
    };

    function handleSuccess(response){
        console.log('Success', response);
        $location.path('/success');
    }

    function handleFailure(response){
        console.log('Failure', response);
        $location.path('/');
        vm.error = true;
    }
}]);
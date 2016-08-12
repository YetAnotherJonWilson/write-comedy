angular.module('comedyApp').controller('RegisterController', ['$http', '$location', function($http, $location){
    var vm = this;

    vm.username = '';  //username
    vm.password = ''; //password
    vm.error = false;
    vm.errorMessage = 'Sorry, Username taken';

    vm.register = function(){
        // console.log('Username', vm.username);
        // console.log('Password', vm.password);

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/signup', sendData).then(handleSuccess, handleFailure);
    };

    function handleSuccess(response){
        console.log('Success', response);
        $location.path('/');
    };

    function handleFailure(response){
        console.log('Failure', response);
        $location.path('/register');
        vm.error = true;
    };
}]);

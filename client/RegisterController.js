angular.module('comedyApp').controller('RegisterController', ['$http', '$location', function($http, $location){
    var vm = this;

    vm.username = '';  //username
    vm.password = ''; //password
    vm.error = false;
    vm.errorMessage = 'Sorry, Username taken';

    vm.register = function(){

        var sendData = {};

        sendData.username = vm.username;
        sendData.password = vm.password;

        $http.post('/signup', sendData).then(handleSuccess, handleFailure);
    };

    function handleSuccess(response){
        $location.path('/');
    }

    function handleFailure(response){
        $location.path('/register');
        vm.error = true;
    }
}]);

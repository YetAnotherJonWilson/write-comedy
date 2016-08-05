angular.module('passportApp').controller('WelcomeController', ['$http', '$location', function($http, $location) {
    var vm = this;

    vm.message = 'User';
    $http.get('/getCurrentUserName').then(handleSuccess);

    function handleSuccess(response){
        vm.username = response.data;
    }
}]);
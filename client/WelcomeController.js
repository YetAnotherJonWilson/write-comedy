angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', function($http, $location) {
    var vm = this;

    $http.get('/getCurrentUserName').then(handleSuccess);

    function handleSuccess(response){
        vm.username = response.data;
    }
}]);
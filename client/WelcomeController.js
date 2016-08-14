angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', function($http, $location) {
    var vm = this;

    $http.get('/getCurrentUserName').then(handleSuccess);

    function handleSuccess(response){
        vm.username = response.data;
    }

    $http.get('/getCurrentUserJokes').then(handleSuccessTwo);

    function handleSuccessTwo(response) {
        vm.jokes = response.data;
        console.log(response.data);
    }

}]);
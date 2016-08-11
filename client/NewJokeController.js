angular.module('passportApp').controller('NewJokeController', ['$http', '$location', function($http, $location){
    var vm = this;
    vm.title = '';
    vm.setup = '';
    vm.punchline = '';
    vm.theme = '';
    vm.subject = '';


    vm.saveJoke = function() {
        console.log(vm.title);
        console.log(vm.setup);
        console.log(vm.punchline);
        console.log(vm.theme);
        console.log(vm.subject);
    };

    $http.get('/getCurrentUserId').then(handleSuccess);

    function handleSuccess(response){
        vm.userId = response.data.id;
        console.log(vm.userId);
    };

    // $http.get('/getCurrentUserName').then(handleSuccess);
    //
    // function handleSuccess(response){
    //     vm.username = response.data;
    //     console.log(vm.username);
    // };


}]);
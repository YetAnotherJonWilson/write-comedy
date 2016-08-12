angular.module('comedyApp').controller('NewJokeController', ['$http', '$location', function($http, $location){
    var vm = this;
    vm.title = '';
    vm.setup = '';
    vm.punchline = '';
    vm.theme = '';
    vm.subject = '';
    vm.afterSave = true;
    vm.saved = false;


    vm.saveJoke = function() {
        $http.get('/getCurrentUserId').then(handleSuccess);

        console.log(vm.title);

        var sendData = {};

        sendData.userId = vm.userId;
        sendData.title = vm.title;
        sendData.setup = vm.setup;
        sendData.punchline = vm.punchline;
        sendData.theme = vm.theme;
        sendData.subject = vm.subject;

        $http.post('/postNewJoke', sendData);

    };

    function handleSuccess(response) {
        vm.userId = response.data.id;
        $location.path('/newjoke');
        vm.afterSave = false;
        vm.saved = true;
    }

}]);
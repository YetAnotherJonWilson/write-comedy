angular.module('comedyApp').controller('NewJokeController', ['$http', '$location', 'DataService', function($http, $location, DataService){
    var vm = this;
    vm.title = '';
    vm.setup = '';
    vm.punchline = '';
    vm.theme = '';
    vm.subject = '';
    vm.afterSave = true;
    vm.saved = false;
    vm.exerciseLink = false;

    var sendData = {};




    vm.saveJoke = function() {
        $http.get('/getCurrentUserId').then(handleSuccess);

        sendData.userId = vm.userId;
        sendData.title = vm.title;
        sendData.setup = vm.setup;
        sendData.punchline = vm.punchline;
        sendData.theme = vm.theme;
        sendData.subject = vm.subject;

        console.log(vm.title);

        $http.post('/postNewJoke', sendData);

    };

    vm.goToExercises = function() {
        $location.path('/exercises');
        DataService.data.currentTitle = vm.title;
        DataService.data.currentSetup = vm.setup;
        DataService.data.currentPunchline = vm.punchline;
        DataService.data.currentTheme = vm.theme;
        DataService.data.currentSubject = vm.subject;


    }

    function handleSuccess(response) {
        vm.userId = response.data.id;
        $location.path('/newjoke');
        vm.afterSave = false;
        vm.saved = true;
        vm.exerciseLink = true;
    }

}]);
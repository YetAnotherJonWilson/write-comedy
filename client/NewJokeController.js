angular.module('comedyApp').controller('NewJokeController', ['$http', '$location', 'DataService', '$localStorage', function($http, $location, DataService, $localStorage){
    var vm = this;
    vm.title = '';
    vm.setup = '';
    vm.punchline = '';
    vm.theme = '';
    vm.subject = '';
    vm.topic = '';
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
        sendData.topic = vm.topic;

        console.log(vm.title);

        $http.post('/postNewJoke', sendData);

    };

    vm.goToExercises = function() {
        $location.path('/exercises');
        var pageData = {};
        vm.pageData = {currentTitle: vm.title, currentSetup: vm.setup, currentPunchline: vm.punchline, currentTheme: vm.theme, currentSubject: vm.subject, currentTopic: vm.topic};
        $localStorage.prevPageData = vm.pageData;



        // DataService.data.currentTitle = vm.title;
        // DataService.data.currentSetup = vm.setup;
        // DataService.data.currentPunchline = vm.punchline;
        // DataService.data.currentTheme = vm.theme;
        // DataService.data.currentSubject = vm.subject;


    };

    function handleSuccess(response) {
        vm.userId = response.data.id;
        $location.path('/newjoke');
        vm.afterSave = false;
        vm.saved = true;
        vm.exerciseLink = true;
    }

}]);
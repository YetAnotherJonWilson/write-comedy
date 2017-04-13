angular.module('comedyApp').controller('NewJokeController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage){
    var vm = this;
    vm.title = '';
    vm.setup = '';
    vm.punchline = '';
    vm.theme = '';
    vm.subject = '';
    vm.topic = '';
    vm.statements = '';
    vm.afterSave = true;
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
        sendData.statements = vm.statements;

        $http.post('/postNewJoke', sendData);

    };

    vm.goToExercises = function() {
        $location.path('/exercises');
        var pageData = {};
        vm.pageData = {currentTitle: vm.title, currentJoke: vm.setup, currentTheme: vm.theme, currentSubject: vm.subject, currentTopic: vm.topic, currentStatements: vm.statements};
        $localStorage.prevPageData = vm.pageData;
    };

    function handleSuccess(response) {
        vm.userId = response.data.id;
        $location.path('/newjoke');
        vm.afterSave = false;
        vm.exerciseLink = true;
    }

}]);
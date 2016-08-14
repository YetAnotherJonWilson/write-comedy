angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage) {
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

    vm.currentJokeInExercises = function(id, title, setup, punchline, theme, subject){
        console.log(id);
        var pageData = {};
        vm.pageData = {currentId: id, currentTitle: title, currentSetup: setup, currentPunchline: punchline, currentTheme: theme, currentSubject: subject};
        $localStorage.prevPageData = vm.pageData;
        $location.path('/exercises');
    }

    // function handleSuccessThree(response){
    //     console.log(response);
    // }

}]);
angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage) {
    var vm = this;

    // warn user before deleting joke
    vm.deleteStepOneButton = true;
    vm.deleteStepTwoButton = false;

    $http.get('/getCurrentUserName').then(handleSuccess);

    function handleSuccess(response){
        vm.username = response.data;
    }

    $http.get('/getCurrentUserJokes').then(handleSuccessTwo);

    function handleSuccessTwo(response) {
        vm.jokes = response.data;
        console.log(response.data);
    }

    vm.currentJokeInExercises = function(id, title, setup, punchline, theme, subject, topic){
        console.log(id);
        var pageData = {};
        vm.pageData = {currentId: id, currentTitle: title, currentSetup: setup, currentPunchline: punchline, currentTheme: theme, currentSubject: subject, currentTopic: topic};

        // Use browser's localstorage to store current joke data
        $localStorage.prevPageData = vm.pageData;
        $location.path('/exercises');
    };

    vm.deleteStepOne = function () {
        vm.deleteStepOneButton = false;
        vm.deleteStepTwoButton = true;
    };

    vm.deleteStepTwo = function(itemId){
        console.log(itemId);
        $http.delete('/crud/deleteitem/' + itemId);
        //.then(fetchItems());
    };

    //fetchItems();

}]);
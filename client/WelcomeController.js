angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage) {
    var vm = this;

    // warn user before deleting joke
    vm.deleteStepOneButton = true;
    vm.deleteStepTwoButton = false;
    vm.nojokes="";

    $http.get('/getCurrentUserJokes').then(handleSuccessTwo);

    function handleSuccessTwo(response) {
        vm.jokes = response.data;
        console.log("vm.jokes =", response.data);
        if(vm.jokes.length < 1 ) {
            vm.nojokes="Click New Joke to create your first joke.";
        }
    }

    vm.currentJokeInExercises = function(id, title, setup_punch, theme, subject, topic){
        console.log(id);
        var pageData = {};
        vm.pageData = {currentId: id, currentTitle: title, currentJoke: setup_punch, currentTheme: theme, currentSubject: subject, currentTopic: topic};
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
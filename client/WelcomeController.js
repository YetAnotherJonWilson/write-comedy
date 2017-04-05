angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage) {
    var vm = this;

    // warn user before deleting joke
    vm.deleteStepOneButton = true;
    vm.deleteStepTwoButton = false;
    vm.nojokes="";
    vm.alljokes="All Jokes";


    $http.get('/getCurrentUserJokes').then(handleSuccessTwo);

    function handleSuccessTwo(response) {
        vm.jokes = response.data;
        console.log("vm.jokes =", response.data);
        if(vm.jokes.length < 1 ) {
            vm.nojokes="To get started, click New Joke to create your first joke.";
            vm.alljokes="";
        }
    }

    vm.currentJokeInExercises = function(id, title, setup_punch, theme, subject, topic, statements){
        console.log("id:", id);
        var pageData = {};
        vm.pageData = {currentId: id, currentTitle: title, currentJoke: setup_punch, currentTheme: theme, currentSubject: subject, currentTopic: topic, currentStatements: statements};
        // Use browser's localstorage to store current joke data
        $localStorage.prevPageData = vm.pageData;
        $location.path('/exercises');
    };

    vm.deleteStepOne = function (itemId) {

        if(confirm("Are you sure?") === true){
            $http.delete('/crud/deleteitem/' + itemId).then(location.reload());
        } else {
            alert("good job");
        }
    };


}]);
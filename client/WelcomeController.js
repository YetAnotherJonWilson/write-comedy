angular.module('comedyApp').controller('WelcomeController', ['$http', '$location', '$localStorage', '$mdDialog', function($http, $location, $localStorage, $mdDialog) {
    var vm = this;

    // warn user before deleting joke
    vm.deleteStepOneButton = true;
    vm.deleteStepTwoButton = false;
    vm.nojokes = "";
    vm.alljokes = "All Jokes";
    vm.owner = "";

    $http.get('/getCurrentUserJokes').then(handleSuccessTwo);

    function handleSuccessTwo(response) {
        vm.jokes = response.data;
        vm.owner = vm.jokes[0].username + "'s Notebook";
        if(vm.jokes.length < 1 ) {
            vm.nojokes="To get started, click New Joke to create your first joke.";
            vm.alljokes="";
        }
    }

    vm.currentJokeInExercises = function(id, title, setup_punch, theme, subject, topic, statements){
        var pageData = {};
        vm.pageData = {currentId: id, currentTitle: title, currentJoke: setup_punch, currentTheme: theme, currentSubject: subject, currentTopic: topic, currentStatements: statements};
        // Use browser's localstorage to store current joke data
        $localStorage.prevPageData = vm.pageData;
        $location.path('/exercises');
    };

        vm.deleteStepOne = function(itemid) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete your joke?')
                .ariaLabel('delete it')
                .ok('Please do it!')
                .cancel('Sounds like a bad idea');

             $mdDialog.show(confirm).then(function() {
                 $http.delete('/crud/deleteitem/' + itemid).then(location.reload());
            });
        };
}]);
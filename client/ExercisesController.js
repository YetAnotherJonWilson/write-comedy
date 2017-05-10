angular.module('comedyApp').controller('ExercisesController', ['$location', '$localStorage', '$http', function($location, $localStorage, $http){
    var vm = this;
    var pageData = {};
    var result = '';
    var altPageData = {};
    vm.updatedTextToSave = false;


    vm.pageData = $localStorage.prevPageData;

    vm.viewAlternateMaterial = function(request, response){
        $http.get('/crud/alternatematerial/' + vm.pageData.currentId).then(handleAltSuccess);
    };

    function handleAltSuccess(response){
        $localStorage.prevPageData = {currentId: response.data[0].id, currentTitle: response.data[0].title, currentJoke: response.data[0].setup_punch, currentStatements: response.data[0].statements, currentTopic: response.data[0].topics, currentTheme: response.data[0].themes, currentAltSetup: response.data[0].alt_setup_punch, currentAltThemes: response.data[0].alt_themes, currentAltSM: response.data[0].alt_subject_matter, currentSubject: response.data[0].subject_matter, currentAltTopic: response.data[0].alt_topics};
        console.log("localstorage object being pased to alt controller", $localStorage.prevPageData);
        $location.path('/alternates');
    }

    vm.getRandomExercise = function(){
        $http.get('/exerciseRandomizer').then(handleSuccess);
    };

    function handleSuccess(response){
        vm.exerciseName = response.data.exercise;
        vm.exerciseDescription = response.data.description;
    }

    function handleSavedSuccess(){
        vm.updatedTextToSave = true;
    }

    vm.replaceElement = function(url, text) {
        vm.crudUrl = url;
        vm.text = text;
        $http({
            method: 'PUT',
            url: vm.crudUrl,
            data: {"id" : vm.pageData.currentId, "text" : vm.text}
        }).then(handleSavedSuccess());
    };
}]);
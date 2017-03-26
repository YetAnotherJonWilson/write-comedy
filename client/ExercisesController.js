angular.module('comedyApp').controller('ExercisesController', ['DataService', '$location', '$localStorage', '$http', function(DataService, $location, $localStorage, $http){
    var vm = this;
    var pageData = {};
    var result = '';
    var altPageData = {};
    vm.updatedTextToSave = false;


    vm.pageData = $localStorage.prevPageData;
    console.log("vm.pageData from exercises controller", vm.pageData);
    //vm.data = DataService.data;

    console.log(vm.pageData); //Title Value Here

    vm.viewAlternateMaterial = function(request, response){
        $http.get('/crud/alternatematerial/' + vm.pageData.currentId).then(handleAltSuccess);
    };

    function handleAltSuccess(response){
        $localStorage.prevPageData = {currentId: response.data[0].id, currentTitle: response.data[0].title, currentJoke: response.data[0].setup_punch, currentStatements: response.data[0].statements, currentTopic: response.data[0].topics, currentTheme: response.data[0].themes, currentAltThemes: response.data[0].alt_themes, currentAltSM: response.data[0].alt_subject_matter, currentSubject: response.data[0].subject_matter, currentAltTopic: response.data[0].alt_topics};
        $location.path('/alternates');
        console.log("response.data[0]", response.data[0]);
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
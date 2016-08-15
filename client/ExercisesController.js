angular.module('comedyApp').controller('ExercisesController', ['DataService', '$location', '$localStorage', '$http', function(DataService, $location, $localStorage, $http){
    var vm = this;
    var pageData = {};
    var result = '';
    vm.updatedTextToSave = false;


    vm.pageData = $localStorage.prevPageData;
    //vm.data = DataService.data;

    console.log(vm.pageData.currentTitle); //Title Value Here


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

    vm.replaceSetup = function(){
        $http.put('/crud/replacesetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess);
    };

    vm.replacePunch = function(){
        $http.put('crud/replacepunchline/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addToSetup = function(){
        $http.put('crud/addtosetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addToPunch = function(){
        $http.put('crud/addtopunchline/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addToSM = function(){
        $http.put('crud/addtosm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addToTopic = function(){
        $http.put('crud/addtotopic/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addToTheme = function(){
        $http.put('crud/addtotheme/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addAltSetup = function(){
        $http.put('crud/addaltsetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    };

    vm.addAltPunch = function(){
        $http.put('crud/addaltpunchline/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    }

    vm.addAltSM = function(){
        $http.put('crud/addaltsm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    }

    vm.addAltTopic = function(){
        $http.put('crud/addalttopic/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    }

    vm.addAltTheme = function(){
        $http.put('crud/addalttheme/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
    }

}]);
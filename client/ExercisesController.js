angular.module('comedyApp').controller('ExercisesController', ['DataService', '$location', '$localStorage', '$http', function(DataService, $location, $localStorage, $http){
    var vm = this;
    var pageData = {};
    var result = '';
    var altPageData = {};
    vm.updatedTextToSave = false;


    vm.pageData = $localStorage.prevPageData;
    //vm.data = DataService.data;

    console.log(vm.pageData); //Title Value Here

    vm.viewAlternateMaterial = function(request, response){
        $http.get('/crud/alternatematerial/' + vm.pageData.currentId).then(handleAltSuccess);
    };

    function handleAltSuccess(response){
        $localStorage.prevPageData = {currentId: response.data[0].id, currentTitle: response.data[0].title, currentJoke: response.data[0].setup_punch, currentAltThemes: response.data[0].alt_themes, currentAltSM: response.data[0].alt_subject_matter, currentSubject: response.data[0].subject_matter, currentAltTopic: response.data[0].alt_topics};
        $location.path('/alternates');
        console.log(response.data[0]);
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

    vm.replaceSetup = function(){
        //$http.put('/crud/replacesetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess);
        $http({
            method: 'PUT',
            url: '/crud/replacesetup/',
            data: {"id" : vm.pageData.currentId, "text" : vm.pageData.currentJoke}
        }).then(handleSavedSuccess());
    };

    vm.replacePunch = function(){
        //$http.put('crud/replacepunchline/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/replacepunchline/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addToSetup = function(){
        //$http.put('crud/addtosetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addtosetup/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addToSM = function(){
        //$http.put('crud/addtosm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addtosm/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addToTopic = function(){
        //$http.put('crud/addtotopic/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addtotopic/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addToTheme = function(){
        //$http.put('crud/addtotheme/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addtotheme/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addToStatements = function(){
        //$http.put('crud/addaltsetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addstatement/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addAltSetup = function(){
        //$http.put('crud/addaltsetup/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addaltsetup/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addAltSM = function(){
        //$http.put('crud/addaltsm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addaltsm/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addAltTopic = function(){
        //$http.put('crud/addalttopic/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addalttopic/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    };

    vm.addAltTheme = function(){
        //$http.put('crud/addalttheme/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addalttheme/',
            data: {"id" : vm.pageData.currentId, "text" : vm.textToUpdate}
        }).then(handleSavedSuccess());
    }
}]);
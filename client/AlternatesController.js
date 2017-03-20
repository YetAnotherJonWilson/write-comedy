angular.module('comedyApp').controller('AlternatesController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage){
    var vm = this;


    vm.pageData = $localStorage.prevPageData;
    console.log("vm.pageData from alternates controller", vm.pageData);
    console.log("localstorage in alternates controller", $localStorage);

    vm.title = vm.pageData.currentTitle;
    vm.joke = vm.pageData.currentJoke;
    vm.subjectMatter = vm.pageData.currentAltSM;
    vm.topics = vm.pageData.currentAltTopic;
    vm.altThemes = vm.pageData.currentAltThemes;

    vm.addAltSM = function(){
        //$http.put('crud/addaltsm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addaltsm/',
            data: {"id" : vm.pageData.currentId, "text" : vm.subjectMatter}
        }).then(handleSavedSuccess());
    };

    vm.addAltTopic = function(){
        //$http.put('crud/addalttopic/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addalttopic/',
            data: {"id" : vm.pageData.currentId, "text" : vm.topics}
        }).then(handleSavedSuccess());
    };

    vm.addAltTheme = function(){
        //$http.put('crud/addalttheme/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        $http({
            method: 'PUT',
            url: '/crud/addalttheme/',
            data: {"id" : vm.pageData.currentId, "text" : vm.altThemes}
        }).then(handleSavedSuccess());
    }

}]);
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

    vm.replaceAltElement = function(url, altText){
        //$http.put('crud/addaltsm/' + vm.pageData.currentId + '/' + vm.textToUpdate).then(handleSavedSuccess());
        vm.altCrudUrl = url;
        vm.altText = altText;
        $http({
            method: 'PUT',
            url: vm.altCrudUrl,
            data: {"id" : vm.pageData.currentId, "text" : vm.altText}
        });
    };
}]);
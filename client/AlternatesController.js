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

}]);
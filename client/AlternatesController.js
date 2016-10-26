angular.module('comedyApp').controller('AlternatesController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage){
    var vm = this;


    vm.pageData = $localStorage.prevPageData;
    console.log("vm.pageData from alternates controller", vm.pageData);

    vm.title = vm.pageData.currentTitle;
    vm.joke = vm.pageData.currentJoke;
    vm.altThemes = vm.pageData.currentAltThemes;

}]);
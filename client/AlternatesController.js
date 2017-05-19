angular.module('comedyApp').controller('AlternatesController', ['$http', '$location', '$localStorage', function($http, $location, $localStorage){
    var vm = this;

    vm.pageData = $localStorage.prevPageData;

    vm.replaceAltElement = function(){
        $http.put('/crud/replaceAltElements', vm.pageData);
    };

    vm.goToExercises = function() {
        $location.path('/exercises');
    };

}]);
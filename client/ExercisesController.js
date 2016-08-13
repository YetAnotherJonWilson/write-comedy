angular.module('comedyApp').controller('ExercisesController', ['DataService', '$location', '$localStorage', '$http', function(DataService, $location, $localStorage, $http){
    var vm = this;
    var pageData = {};
    var result = '';

    vm.pageData = $localStorage.prevPageData;
    //vm.data = DataService.data;

    console.log(vm.pageData.currentTitle); //Title Value Here


    vm.getRandomExercise = function(){
        $http.get('/exerciseRandomizer').then(handleSuccess);
    }

    function handleSuccess(response){
        vm.exerciseName = response.data.exercise;
        vm.exerciseDescription = response.data.description;
    }

}]);
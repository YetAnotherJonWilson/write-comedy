angular.module('comedyApp').controller('ExercisesController', ['DataService', '$location', function(DataService, $location){
    var vm = this;

    vm.data = DataService.data;

    console.log(vm.data.currentTitle); //Title Value Here

}]);
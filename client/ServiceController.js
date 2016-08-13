angular.module('comedyApp').controller('ServiceController', ['DataService', function(DataService){
    var vm = this;

    vm.data = DataService.data;

    console.log(vm.data.currentTitle); //Title Value Here
}]);
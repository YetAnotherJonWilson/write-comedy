angular.module('comedyApp').controller('MainController', ['$http', '$mdMedia', '$scope', function($http, $mdMedia, $scope){
    var vm = this;

    vm.message = "Comedy Write Now";

    $scope.$watch(function() {
        return $mdMedia('xs') ? 'small' : 'large';
    }, function(size){
        vm.screenSize = size;
    })

}]);
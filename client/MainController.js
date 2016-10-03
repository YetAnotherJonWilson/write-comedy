angular.module('comedyApp').controller('MainController', ['$http', '$mdMedia', '$scope', function($http, $mdMedia, $scope){
    var vm = this;

    vm.message = "Comedy Write Now";

    // Set screensize for screens under or over 600px
    $scope.$watch(function() {
        return $mdMedia('xs') ? 'small' : 'large';
    }, function(size){
        vm.screenSize = size;
    })

}]);
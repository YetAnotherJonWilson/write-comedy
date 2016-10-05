angular.module('comedyApp').controller('MainController', ['$http', '$mdMedia', '$scope', function($http, $mdMedia){
    var vm = this;

    vm.message = "Comedy Write Now";

    // Set screensize for screens under or over 600px

    setScreensize = function() {
        if ($mdMedia('xs') === true) {
            vm.screenSize = 'small';
        } else {
            vm.screensize = 'large';
        }
    };

    setScreensize();
}]);
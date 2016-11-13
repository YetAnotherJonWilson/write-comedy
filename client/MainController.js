angular.module('comedyApp').controller('MainController', ['$http', '$mdMedia', '$scope', function($http, $mdMedia){
    var vm = this;

    vm.message = "Comedy Notebook";

    $http.get('/getCurrentUserName').then(handleSuccess);

    function handleSuccess(response){
        vm.username = response.data;
    }

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
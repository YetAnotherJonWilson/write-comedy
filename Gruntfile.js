module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            files: ['client/*.js'],
            tasks: ['uglify']
        },
        uglify: {
            my_target: {
                //  options: {
                //    mangle: false
                //  },
                files: {
                    'public/assets/client.min.js': ['client/passportApp.module.js', 'client/passportApp.config.js', 'client/MainController.js', 'client/LoginController.js', 'client/RegisterController.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify', 'watch']);

};

module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  cssmin: {
    compress: {
        files: {
            'dist/wickedcss.min.css': ['wickedcss.css'],
        },
    },
  },
  watch: {
  scripts: {
    files: ['wickedcss.css'],
    tasks: ['cssmin'],
    options: {
      spawn: false,
    },
  },
},
}); 

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('min', ['cssmin']);
};
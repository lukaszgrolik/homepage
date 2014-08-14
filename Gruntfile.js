module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 3030,
        }
      }
    },

    sass: {
      dist: {
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['> 0.5%']
      },
      main: {
        src: 'css/main.css',
        dest: 'css/main.css'
      },
    },

    watch: {
      options: {
        atBegin: true
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:dist']
      },
      autoprefixer: {
        files: ['css/main.css'],
        tasks: ['autoprefixer:main']
      },
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);

};
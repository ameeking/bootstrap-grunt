module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        preserveComments: false,
        mangle: false
      },
      bootstrap: {
        src: 'src/js/main.js',
        dest: 'public/js/main.min.js'
      },
    },
    less: {
      development: {
        options: {
          paths: ['public/less'],
          yuicompress: false
        },
        files: {
          'public/css/styles.css':'src/less/styles.less'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'public/css/styles.min.css': ['public/css/styles.css']
        }
      }
    },
    watch: {
      less: {
        files: 'src/less/styles.less',
        tasks: ['less'],
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('deploy', ['uglify', 'less', 'cssmin']);
  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);
 
};
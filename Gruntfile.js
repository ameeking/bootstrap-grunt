module.exports = function(grunt) {
  grunt.initConfig({
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
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('deploy', ['less','cssmin']);
  grunt.registerTask('default', ['less','cssmin']);
 
};
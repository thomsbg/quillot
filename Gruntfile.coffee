module.exports = (grunt) ->
  grunt.initConfig
    clean: ['lib/*.js']
    coffee:
      compile:
        files:
          'lib/quillot.js': ['src/quillot.coffee']
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.registerTask 'default', ['coffee']

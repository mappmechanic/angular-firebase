module.exports = function(grunt){

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
               files: '**/*.scss',
               tasks: ['sass']
            }
        },
        cssc: {
            build: {
                        options: {
                            consolidateViaDeclarations: true,
                            consolidateViaSelectors:    true,
                            consolidateMediaQueries:    true
                        },
                        files: {
                            'css/style.css': 'css/style.scss'
                        }
                    }
        },

        cssmin: {
            build: {
                src: 'css/style.css',
                dest: 'css/style.scss'
            }
        },

        sass: {
            build: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        }
    });

    grunt.registerTask('default', []);

};
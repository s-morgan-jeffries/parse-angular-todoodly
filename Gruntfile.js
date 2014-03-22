// Generated on 2014-03-02 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      parse: 'parse'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
//        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        files: ['<%= yeoman.app %>/scripts/**/*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      parse: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.parse %>/public/*'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },

    'string-replace': {
      dist: {
        options: {
          replacements: [
            {
              pattern: '<script src="bower_components/ng-file-upload/angular-file-upload-shim.js"></script>',
              replacement: '<script src="bower_components/ng-file-upload/angular-file-upload-shim.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular/angular.js"></script>',
              replacement: '<script src="bower_components/angular/angular.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-resource/angular-resource.js"></script>',
              replacement: '<script src="bower_components/angular-resource/angular-resource.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-cookies/angular-cookies.js"></script>',
              replacement: '<script src="bower_components/angular-cookies/angular-cookies.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>',
              replacement: '<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-route/angular-route.js"></script>',
              replacement: '<script src="bower_components/angular-route/angular-route.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/lodash/dist/lodash.compat.js"></script>',
              replacement: '<script src="bower_components/lodash/dist/lodash.compat.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>',
              replacement: '<script src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>',
              replacement: '<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/ngstorage/ngStorage.js"></script>',
              replacement: '<script src="bower_components/ngstorage/ngStorage.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>',
              replacement: '<script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>'
            }, {
              pattern: '<script src="bower_components/ng-file-upload/angular-file-upload.js"></script>',
              replacement: '<script src="bower_components/ng-file-upload/angular-file-upload.min.js"></script>'
            }, {
              pattern: '<script src="scripts/parseRestInitDev.js"></script>',
              replacement: '<script src="scripts/parseRestInitProd.js"></script>'
            }, {
              pattern: '<script src="bower_components/parse-js-sdk/lib/parse.js"></script>',
              replacement: ''
            }, {
              pattern: '<script src="scripts/parseInitDev.js"></script>',
              replacement: ''
            }, {
              pattern: '<script src="scripts/debug.js"></script>',
              replacement: ''
            }
          ]
        },
        src: '<%= yeoman.app %>/index.html',
        dest: '.tmp/index.html'
//        files: [{
////          dot: true,
////          expand: true,
////          flatten: true,
////          cwd: '<%= yeoman.app %>',
//          src: '<%= yeoman.app %>/index.html',
//          dest: '.tmp/index.html'
//        }]
      }
    },


    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
//      html: '<%= yeoman.app %>/index.html',
      html: '.tmp/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            '!index.html',
            'views/{,*/}*.html',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.tmp',
          dest: '<%= yeoman.dist %>',
          src: ['index.html']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      parse: {
        expand: true,
        dest: '<%= yeoman.parse %>/public/',
        src: [
          '*',
          'bower_components/**/fonts{,/**}/*',
          'bower_components/es5-shim/es5-shim.js',
          'bower_components/json3/lib/json3.min.js',
          'images/*',
          'scripts/*',
          'styles/*',
          'views/*',
          '!robots.txt'
        ],
        cwd: '<%= yeoman.dist %>'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'bower-install',
    'string-replace:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('parse', [
    'build',
    'clean:parse',
    'copy:parse'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};

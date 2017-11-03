' use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var gulp_less = require('gulp-less');
var connect = require('gulp-connect');
var cssnano = require('gulp-cssnano');
var gulp_sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var del = require('del');
var minifyjs = require('gulp-js-minify');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var coffee = require('gulp-coffee');
var svgmin = require('gulp-svgmin');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var usemin = require('gulp-usemin');
var uglifyJs = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var multiDestination = require('gulp-multi-dest');
var merge2 = require('merge2');
var browserSync = require('browser-sync').create();

/**
 * 
 * GULP FILE WRITTEN BY SANTOSH
 */

var destOptions = {
    mode: 0755
};

// delete all the files and folder
gulp.task('clean:project', function () {
    util.log('clean:project', 'clean all the directory from project excepts bower', util.colors.magenta('123'));
    return del(['public/*.html', 'public/stylesheets/', 'public/images/', 'public/coffee/', 'public/javascripts/', 'public/ng/', '!public/bower_components/'
    ]);
});


// The Clean has been deprecated 
gulp.task('build-clean', function () {
    return gulp.src('public/stylesheets/style.min.css', { read: false })
        .pipe(clean({ force: true }));
});

gulp.task('build-cache', function (done) {
    return cache.clearAll(done);
});


gulp.task('build-usemin', function () {
    return gulp.src('public_dev/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        //.pipe(gulp.dest('public/'))
        // .pipe(multiDestination(['.public/', 'public/javascripts/'], destOptions));
        .pipe(multiDestination(['public/'], destOptions));
});


// gulp.task('build-usemin', function() {
//     return gulp.src('public_dev/index.html')
//         .pipe(usemin({
//             js: [uglifyJs(), 'concat'],
//             css: [cssnano({keepSpecialComments: 0}), 'concat'],
//         }))
//         .pipe(gulp.dest('public/'));
// });



// Copy all js files
gulp.task('build-js-minify', function () {
    gulp.src('public_dev/js/**/*.js')
        .pipe(gulp_sourcemaps.init())  /// use to map all *.js files to public_development
        .pipe(minifyjs())
        .pipe(concat('main.min.js'))
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest('public/javascripts/'));
});


// Copy all js files
gulp.task('build-js-notminify', function () {
    gulp.src('public_dev/js/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/javascripts/'));
});

// Copy all scss files
gulp.task('build-sass', function () {
    return gulp.src('public_dev/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['public_dev/scss'],
            indentedSyntax: true,
            errLogToConsole: true
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/stylesheets/'));
});

// Copy all css files
gulp.task('build-css', function () {
    util.log('build-css', 'build css working', util.colors.magenta('123'));

    return gulp.src('public_dev/css/**/*.css')
        .pipe(gulp_sourcemaps.init())
        .pipe(cssnano({ keepBreaks: true }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        //.pipe(rename('style.min.css'))
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest('public/stylesheets/'));
    //.pipe(connect.reload());
});


// Copy all less files
gulp.task('build-less', function () {
    gulp.src('public_dev/less/**/*.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('public_dev/stylesheets/'));

});


// Copy all html files
// gulp.task('build-html', function () {
//     gulp.src('public_dev/**/*.html')
//         .pipe(connect.reload())
//         .pipe(gulp.dest('public/'));
// });



// Copy all stylus files
gulp.task('build-stylus', function () {
    gulp.src('public_dev/stylus/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(connect.reload());
});

// Copy all ng js files
gulp.task('build-ng', function () {
    console.log("ng is updating");
    return gulp.src('public_dev/ng/**/*')
        .pipe(gulp.dest('public/ng/'));
});

gulp.task('build-images', function () {
    gulp.src('public_dev/images/**/*.+(png|jpg|jpeg|gif)')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'));
});


// Copy all bower js files
gulp.task('build-bowercomponents', function () {
    console.log("bower is updating");
    var src_first = gulp.src([
        "public_dev/bower_components/**/*",

    ])
    var src_second = gulp.src([
        "public_dev/components/**/*",

    ])
    return merge2(src_first, src_second)
        .pipe(gulp.dest('public/bower_components/'));

});

// Copy coffee scripts
gulp.task('build-coffee', function () {
    gulp.src('public_dev/coffee/**/*.coffee')
        .pipe(coffee({ bare: true })
            .on('error', util.log))
        .pipe(gulp.dest('public/coffee/'));
});


// Copy svg
gulp.task('build-svg', function () {
    return gulp.src('public_dev/images/svg/**/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDoctype: false
            }, {
                removeComments: false
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2
                }
            }, {
                convertColors: {
                    names2hex: false,
                    rgb2hex: false
                }
            }]
        }))
        .pipe(gulp.dest('public/images/svg/'));
});


// Copy Fonts
gulp.task('build-fonts', function () {
    return gulp.src('public_dev/images/fonts/**/*.{ttf,woff,eof,svg}')
        .pipe(gulp.dest('public/images/fonts/'));
});

// Copy icons
gulp.task('build-icons', function () {
    return gulp.src('public_dev/images/icons/**/*.+(png|jpg|jpeg|gif|ico)')
        // Caching images that ran through imagemin
        // .pipe(cache(imagemin({
        //     interlaced: true
        // })))
        .pipe(gulp.dest('public/images/icons/'));
});

gulp.task('build-connect', function () {
    connect.server({
        name: 'CrewLink Application :',
        root: 'public',
        livereload: true,
        port: process.env.PORT || 8888,
        debug: false
    });
    // connect.serverClose(); // run some headless tests with phantomjs 
    // when process exits: 
});

gulp.task('browser-sync', function () {
    browserSync.init({
        port: 8888,
        server: {
            baseDir: "public",
        },
        watchOptions: {
            ignoreInitial: true,
            ignored: '*.txt'
        },

    });
});

gulp.task('watch', function () {
    gulp.watch('public_dev/sass/**/*.scss', ['build-sass']);
    //gulp.watch(['public_dev/**/*.html'], ['build-html']);
    gulp.watch(['public_dev/less/**/*.less'], ['build-less']);
    gulp.watch(['public_dev/css/**/*.css'], ['build-css']);
    gulp.watch(['public_dev/stylus/**/*.styl'], ['build-stylus']);
    // gulp.watch(['public_dev/js/**/*.js'], ['build-js-minify']);
    gulp.watch(['public_dev/js/**/*.js'], ['build-js-notminify']);

    gulp.watch(['public_dev/coffee/**/*.coffee'], ['build-coffee']);
    gulp.watch(['public_dev/images/**/*.+(png|jpg|jpeg|gif)'], ['build-images']);
    gulp.watch(['public_dev/images/svg/**/*.svg'], ['build-svg']);
    gulp.watch(['public_dev/images/icons/**/*.+(png|jpg|jpeg|gif|ico)'], ['build-icons']);
    gulp.watch(['public_dev/index.html'], ['build-usemin']);

    gulp.watch(['public_dev/bower_components/**/*'], ['build-bowercomponents']);


    gulp.watch('public_dev/ng/**/*', ['build-ng']);
    //gulp.watch('public_dev/**/*', connect.reload);
    gulp.watch('public_dev/**/*', browserSync.reload);

});

gulp.task('livereload', function () {
    gulp.src(['public/**/*.*'])
        .pipe(watch(['public/**/*.*']))
        .pipe(connect.reload());
});

gulp.task('browser-sync-livereload', function () {
    gulp.src(['public/**/*.*'])
        .pipe(watch(['public/**/*.*']))
        .pipe(browserSync.reload);
});

gulp.task("clear:project", function (callback) {
    runSequence('clean:project', 'build-clean', 'build-cache',
        callback
    );
});

gulp.task('clean:bower', function () {
    util.log('clean:project', 'clean all the bower directory', util.colors.magenta('123'));
    return del(['public/bower_components/**/*']);

});
gulp.task("clear:bower_components", function (callback) {
    runSequence('clean:bower',
        callback
    );
});

gulp.task('build', function (callback) {
    runSequence(['build-ng', 'build-bowercomponents', 'build-usemin', 'build-fonts', 'build-icons', 'build-svg', 'build-coffee', 'build-images', 'build-sass', 'build-less', /*'build-html',*/ 'build-stylus', 'build-css', /*'build-js-minify'*/'build-js-notminify'],
        callback);
});



//gulp.task('default', ['build-connect', 'livereload', 'watch', 'build']);
//gulp.task('default', ['browser-sync', 'browser-sync-livereload', 'watch', 'build']);
gulp.task('default', ['browser-sync','watch', 'build']);

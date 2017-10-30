' use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus'),
    gulp_less = require('gulp-less'),
    connect = require('gulp-connect'),
    cssnano = require('gulp-cssnano'),
    gulp_sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    util = require('gulp-util'),
    runSequence = require('run-sequence'),
    del = require('del'),
    minifyjs = require('gulp-js-minify'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    coffee = require('gulp-coffee'),
    clean = require('gulp-clean');

/**
 * 
 * GULP FILE WRITTEN BY SANTOSH SAHU
 */


gulp.task('clean:project', function () {
    util.log('clean:project', 'clean all the directory from project excepts bower', util.colors.magenta('123'));
    return del(['public/stylesheets/', 'public/javascripts/', '!public/bower_components/'
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

gulp.task('build-js', function () {
    gulp.src('public_dev/js/**/*.js')
        .pipe(minifyjs())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/javascripts/'));
});

gulp.task('build-sass', function () {
    return gulp.src('public_dev/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['public_dev/scss'],
            indentedSyntax: true,
            errLogToConsole: true
        }))
        .pipe(gulp.dest('public/stylesheets/stylesheets.css'));
});

gulp.task('build-css', function () {
    util.log('build-css', 'build css working', util.colors.magenta('123'));

    return gulp.src('public_dev/css/**/*.css')
        .pipe(gulp_sourcemaps.init())
        .pipe(cssnano())
        .pipe(concat('style.min.css'))
        .pipe(gulp_sourcemaps.write('.'))
        .pipe(gulp.dest('public/stylesheets/'))
        .pipe(connect.reload());
});



gulp.task('build-less', function () {
    gulp.src('public_dev/less/**/*.less')
        .pipe(gulp_less())
        .pipe(gulp.dest('public_dev/stylesheets/'));

});

gulp.task('build-html', function () {
    gulp.src('public_dev/**/*.html')
        .pipe(connect.reload())
        .pipe(gulp.dest('public/'));
});
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
        .pipe(gulp.dest('public/ng/'))
});

gulp.task('build-images', function(){
gulp.src('public_dev/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images'))
});


// Copy all bower js files
gulp.task('build-bowercomponents', function () {
    console.log("bower is updating");
    return gulp.src('public_dev/bower_components/**/*')
        .pipe(gulp.dest('public/bower_components/'))
});

gulp.task('build-coffee', function() {
    gulp.src('public_dev/coffee/**/*.coffee')
    .pipe(coffee({bare: true})
      .on('error', util.log))
    .pipe(gulp.dest('public/coffee/'))
  });

gulp.task('build-connect', function () {
    connect.server({
        name: 'CrewLink Application :',
        root: 'public',
        livereload: true,
        port: 8888
    });
    // connect.serverClose(); // run some headless tests with phantomjs 
    // when process exits: 
});

gulp.task('watch', function () {
    gulp.watch('public_dev/sass/**/*.scss', ['build-sass']);
    gulp.watch(['public_dev/**/*.html'], ['build-html']);
    gulp.watch(['public_dev/less/**/*.less'], ['build-less']);
    gulp.watch(['public_dev/css/**/*.css'], ['build-css']);
    gulp.watch(['public_dev/stylus/**/*.styl'], ['build-stylus']);
    gulp.watch(['public_dev/js/**/*.js'], ['build-js']);
    gulp.watch(['public_dev/coffee/**/*.*'], ['build-coffee']);
    gulp.watch(['public_dev/images/**/*.*'], ['build-images']);
    
    gulp.watch('public_dev/ng/**/*', ['ng']);
    gulp.watch('public_dev/**/*', connect.reload);
});


gulp.task("clear:project", function (callback) {
    runSequence('clean:project', 'build-clean', 'build-cache',
        callback
    );
});

gulp.task('build', function (callback) {
    runSequence(['build-ng','build-bowercomponents','build-coffee','build-images' ,'build-sass', 'build-less', 'build-html', 'build-stylus', 'build-css', 'build-js'],
        callback);
});



gulp.task('default', ['build-connect', 'watch', 'build']);
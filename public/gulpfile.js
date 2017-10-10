const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const gutil = require('gulp-util');

gulp.task('css-minify', () => {
    gulp.src('./css/style.css')
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('js-minify', () => {
    gulp.src('./controllers/*.js')
        .pipe(minify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./controllers'))
    gulp.src('./config/*.js')
        .pipe(minify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./config'))
    gulp.src('./app-modules/*.js')
        .pipe(minify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./app-modules'))
    gulp.src('./requesters/*.js')
        .pipe(minify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('./requesters'))
});
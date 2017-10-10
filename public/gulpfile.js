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
    gulp.src(['./controllers/*.js', './config/*.js', './app-modules/*.js', './requesters/*.js'])
        .pipe(minify())
        .on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
});
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const gutil = require('gulp-util');
const spa = require('gulp-spa');
const html5Lint = require('gulp-html5-lint');
const jshint = require('gulp-jshint');
const csslint = require('gulp-csslint');
const htmlMin = require('gulp-htmlmin');
const rev = require('gulp-rev');
const cleanCss = require('gulp-clean-css');
const shell = require('gulp-shell');


gulp.task('css-minify', () => {
    gulp.src('./css/style.css')
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css'))
});

gulp.task('html-minify', () => {
    gulp.src('./index.html')
        .pipe(htmlMin())
        .pipe(concat('index.min.html'))
        .pipe(gulp.dest('./'))
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

gulp.task("lint", () => {
    return gulp.src("./index.html")
        .pipe(spa.html({
            assetsDir: "./",
            pipelines: {
                main: (files) => {
                    return files
                        .pipe(html5Lint())
                },

                js: (files) => {
                    return files
                        .pipe(jshint())
                        .pipe(jshint.reporter('default'))
                },

                css: (files) => {
                    return files
                        .pipe(csslint())
                        .pipe(csslint.formatter())
                }
            }
        }))
        .pipe(gulp.dest("./"));
});

gulp.task("build", ['html-minify', 'css-minify', 'js-minify', 'serve']);

gulp.task('deploy', shell.task([
    'firebase deploy'
]));

gulp.task('serve', shell.task([
    'firebase serve'
]));

gulp.task('dev', ['lint', 'serve'])
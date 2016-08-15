var gulp = require('gulp');
var minifycss = require('gulp-minify-css'),
var rename = require('gulp-rename');

// Include Our Plugins
var jshint = require('gulp-jshint');
// Requires the gulp-sass plugin
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Compile Our CSS
gulp.task('styles', function() {
  return gulp.src('css/**/*.css') // Gets all files ending with .css in css folder
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.css', ['lint', 'styles']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'lindsaykneal'
    },
  })
})

gulp.task('watch', ['browserSync', 'styles'], function (){
  gulp.watch('js/*.js', ['lint', 'scripts']);
  // Other watchers
});

npm install gulp-minify-css gulp-rename --save-dev
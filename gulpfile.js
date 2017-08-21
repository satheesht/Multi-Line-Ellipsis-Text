var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');


gulp.task('js', function(){
    gulp.src('src/js/multiLineEllipsis.js')
         .pipe(concat('multiLineEllipsis.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('demo/js/'));
 });

gulp.task('css', function(){
    gulp.src('src/css/multiLineEllipsis.css')
         .pipe(concat('multiLineEllipsis.min.css'))
         .pipe(minify())
         .pipe(gulp.dest('demo/css/'));
 });

 gulp.task('default',['js','css'],function(){
});
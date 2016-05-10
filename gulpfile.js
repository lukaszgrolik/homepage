var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./src/style/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer({
      browsers: ['> 1%']
    })
  ]))
  .pipe(cssmin())
  .pipe(gulp.dest('./web'));
});

gulp.task('watch', function () {
  gulp.watch('./src/style/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'])
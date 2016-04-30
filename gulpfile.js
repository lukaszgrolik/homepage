var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function () {
  return gulp.src('./src/style/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cssmin())
  .pipe(gulp.dest('./web'));
});

gulp.task('watch', function () {
  gulp.watch('./src/style/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'])
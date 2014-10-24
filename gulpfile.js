var gulp = require('gulp');
var gp = require('gulp-load-plugins')();

gulp.task('connect', function() {
  gp.connect.server({
    root: 'web',
    port: 3030,
    livereload: true
  });
});

gulp.task('livereload', function() {
  return gulp.src('web/**/*.{html,js}')
  .pipe(gp.connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
  .pipe(gp.plumber())
  .pipe(gp.sass())
  .pipe(gp.autoprefixer({
    browsers: ['> 0.5%']
  }))
  .pipe(gulp.dest('web/css'))
  .pipe(gp.connect.reload());
});

// gulp.task('minifyCss', ['sass'], function() {
//   return gulp.src('web/css/main.css')
//   .pipe(gp.minifyCss())
//   .pipe(gp.rename('main.min.css'))
//   .pipe(gulp.dest('web/css'))
//   .pipe(gp.connect.reload())
// });

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('web/**/*.{html,js}', ['livereload'])
});

gulp.task('build', ['sass']);
gulp.task('server', ['build', 'connect', 'watch'])
gulp.task('default', ['server'])
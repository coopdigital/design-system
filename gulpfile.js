var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

gulp.task('copy', function () {
  gulp.src('node_modules/coop-frontend-toolkit/static/**/*')
  .pipe(gulp.dest('public/'));
});

gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
  .pipe(sass({
    includePaths: [
      'node_modules/coop-frontend-toolkit/styles/',
      'scss/'
    ]
    // outputStyle: 'compressed'
  }))
  .on('error', function(err) {
    console.log(err.messageFormatted);
    this.emit('end');
  })
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('public/css'));
});

gulp.task('coop-theme-sass', function () {
  return gulp.src('scss/coop-theme.scss')
  .pipe(sass({
    includePaths: [
      'scss/'
    ],
    outputStyle: 'compressed'
  }))
  .on('error', function(err) {
    console.log(err.messageFormatted);
    this.emit('end');
  })
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('public/css'));
});


gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'coop-theme-sass', 'copy', 'watch']);

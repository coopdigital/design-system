var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var babel       = require('gulp-babel');
var rename      = require('gulp-rename');
var include     = require('gulp-include');
var sourcemaps  = require('gulp-sourcemaps');

/**
 * Settings
 */
var src = '';
var dest = '';

var src_paths = {
  // styles: src + '_css/**/*.scss',
  scripts: src + 'js/frontend-components.js'
};

var dest_paths = {
  scripts: dest + 'public/js/frontend-components.js'
};

gulp.task('copy', function () {
  gulp.src('node_modules/coop-frontend-toolkit/static/**/*')
  .pipe(gulp.dest('public/'));
});

gulp.task('sass', function () {
  return gulp.src('scss/main.scss')
  .pipe(sass({
    includePaths: [
      'node_modules/@coopdigital/coop-frontend-foundations/',
      'node_modules/@coopdigital/coop-frontend-components/',
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
      'node_modules/@coopdigital/coop-frontend-foundations/',
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

// Lint Task
// gulp.task('lint', function() {
//   return gulp.src('js/*.js')
//       .pipe(jshint())
//       .pipe(jshint.reporter('default'));
// });

// Scripts
gulp.task('js', function() {
  gulp.src(src_paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(include())
      .pipe(concat('frontend-components.js'))
      // .pipe(uglify())
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest(dest_paths.scripts))
});

// gulp.task('js', function() {
//     return gulp.src('js/frontend-components.js')
//     .pipe(babel({
//       presets: ['env']
//     }))
//     .pipe(concat('frontend-components.js'))
//     .pipe(rename('frontend-components.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest(dest_paths.scripts))
// });

gulp.task('watch', function () {
  gulp.watch(['scss/**/*.scss', 'node_modules/@coopdigital/coop-frontend-foundations/**/*.scss', 'node_modules/@coopdigital/coop-frontend-components/**/*.scss'], ['sass', 'coop-theme-sass']);
});

gulp.task('default', ['sass', 'coop-theme-sass', 'js', 'copy', 'watch']);

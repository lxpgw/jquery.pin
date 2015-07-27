var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var rename = require('gulp-rename');
var pkg = require('./package.json');

var DIST_DIR = 'dist';

gulp.task('clean', function(cb) {
    del([DIST_DIR], cb);
});


gulp.task('build',  ['clean'], function() {
    return gulp.src(pkg.name + '.js')
      .pipe(gulp.dest(DIST_DIR))
      .pipe(uglify())
      .pipe(rename(pkg.name + '.min.js'))
      .pipe(gulp.dest(DIST_DIR));;
});

gulp.task('default', ['build']);

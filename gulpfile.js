/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', ['copyHtml'], function() {
  return gutil.log('Gulp is running!');
});

gulp.task('copyHtml', function() {
	  // copy any html files in source/ to public/
	gutil.log('Gulp is copying!');
	gulp.src('source/*.html').pipe(gulp.dest('public'));
});
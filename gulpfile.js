'use strict';

var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var pump   = require('pump');
var rename = require("gulp-rename");


gulp.task('default', function (cb) {
  pump(
      gulp.src('jquery.counterup.js'),
      uglify(),

        rename(function (path) {
          console.log(path);
          path.extname = '.min' + path.extname;
        })
      ,
      gulp.dest('.')
    ,
    cb
  );
});

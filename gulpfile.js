const { src, dest, parallel } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify-es').default;

function js() {
  return browserify('./index.js')
    .bundle()
    .pipe(source('source.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(dest('./dist/'));
}

module.exports = {
  js
}
var gulp = require('gulp');
var webpackstream = require("webpack-stream");
var webpack = require('webpack');
var rimraf = require('rimraf');

function clean(cb) {
  //clean public/javascript/*JSON.stringify
  rimraf.sync('./public/javascripts/*');
  cb();
}

function mainBundle() {
  console.log('mainBundle');
  let cfg = {
    mode: "none",
    output: {
      filename: "main.js",
      globalObject: "this"
    },
    performance: { hints: false},
    devtool: 'source-map',
    node: false
  }
  return gulp
    .src("./src/index.js")
    .pipe(webpackstream(cfg, webpack))
    .pipe(gulp.dest("./public/javascripts"));
}

function onFileChange() {
  gulp.watch('./src/**/*', gulp.series(clean, mainBundle));
}

exports.default = gulp.series(clean, mainBundle, onFileChange);

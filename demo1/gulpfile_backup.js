"use strict"

var gulp    = require("gulp")
,livereload = require("gulp-livereload")
,sass       = require("gulp-sass")
,haml       = require("gulp-haml")
,coffee     = require("gulp-coffee")
,concat     = require("gulp-concat")
;

gulp.task("default", ['haml','sass','coffee','watch']);

gulp.task('haml',function(){
	gulp.src('./assets/views/**/*.haml')
	.pipe(haml())
	.pipe(gulp.dest('./public/'))
	.pipe(livereload());
});	

gulp.task('sass',function(){
	gulp.src('./assets/stylesheets/**/*.sass')
	.pipe(sass())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./public/dist/css'))
	.pipe(livereload())
});

gulp.task('coffee',function(){
	gulp.src('./assets/javascripts/**/*.coffee')
	.pipe(coffee())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/dist/js'))
	.pipe(livereload())
});

gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('./assets/views/**/*.haml',['haml']);
	gulp.watch('./assets/stylesheets/**/*.sass',['sass']);		
	gulp.watch('./assets/javascripts/**/*.coffee',['coffee']);
});

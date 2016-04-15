"use strict"

var gulp    = require("gulp")
,sass       = require("gulp-sass")
,coffee     = require("gulp-coffee")
,concat     = require("gulp-concat")
;

gulp.task("default", ['html','php','sass','coffee','watch']);

gulp.task('html',function(){
	gulp.src('./assets/views/**/*.html')
	.pipe(gulp.dest('./public/'))
});

gulp.task('php',function(){
	gulp.src('./assets/views/**/*.php')
	.pipe(gulp.dest('./public/'))
});

gulp.task('sass',function(){
	gulp.src('./assets/stylesheets/**/*.sass')
	.pipe(sass())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./public/dist/css'))
});

gulp.task('coffee',function(){
	gulp.src('./assets/javascripts/**/*.coffee')
	.pipe(coffee())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/dist/js'))
});

gulp.task('watch',function(){
	gulp.watch('./assets/stylesheets/**/*.sass',['sass']);		
	gulp.watch('./assets/javascripts/**/*.coffee',['coffee']);
	gulp.watch('./assets/views/**/*.html',['html']);
	gulp.watch('./assets/views/**/*.php',['php']);
});

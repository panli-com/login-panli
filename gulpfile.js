// 引入 gulp
var gulp = require('gulp');
var react = require('gulp-react');

// 引入组件
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    browserSync = require('browser-sync').create(),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    port = process.env.port || 5000;


gulp.task('browserify',function(){
	gulp.src('./src/js/main.js')
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(gulp.dest('./dist/js'))
  .pipe(rename({suffix: '.min'}))
        .pipe(uglify());

});


// live reload
gulp.task('connect',function(){
    connect.server({
        // root:'./',
        port: port,
        livereload: true,
    })
})


// reload Js
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
})

gulp.task('html',function(){
	gulp.src('./*.html')
	.pipe( connect.reload() )
});

gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./*.html',['html']);
	gulp.watch('./src/js/*.js',['browserify']);
  gulp.watch('./src/js/**/*.jsx',['browserify']);
})


gulp.task('serve',['browserify','connect','watch']);

var gulp = require('gulp');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var nib = require('nib');

var buildPath = './build';

gulp.task('server', function(){
	connect.server({
		root: buildPath,
		port: 8080,
		livereload: true
	});
});

gulp.task('build:html', function() {
	gulp.src('./src/**/*.html')
		.pipe(gulp.dest(buildPath))
		.pipe(connect.reload());
});

gulp.task('build:js', function() {
	gulp.src('./src/js/**/*.js')
		.pipe(gulp.dest(buildPath+'/js'))
		.pipe(connect.reload());
});

gulp.task('build:css', function() {
	gulp.src('./src/style/main.styl')
		.pipe(stylus({
			use: nib()
		}))
		.pipe(gulp.dest(buildPath+'/css'))
		.pipe(connect.reload());
});

gulp.task('build:assets', function() {
	gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest(buildPath+'/assets'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./src/**/*.html', ['build:html']);
	gulp.watch('./src/**/*.styl', ['build:css']);
	gulp.watch('./src/**/*.js', ['build:js']);
	gulp.watch('./src/assets/**/*.*', ['build:assets']);

});

gulp.task('build', ['build:css', 'build:html', 'build:js', 'build:assets']);

gulp.task('default', ['server', 'build', 'watch']);
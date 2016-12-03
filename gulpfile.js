var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('watch',function(){
    watch(['./*.html','./*.css','./css/**/*','./js/**/*'],reload)
});

gulp.task('browser-sync',['watch'],function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync']);


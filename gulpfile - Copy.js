var gulp = require("gulp");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));
watchedBrowserify.on("log", gutil.log);

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("bundle", ['copy-html'],function () {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});

gulp.task('watch',['bundle'],function(){
    var watcher = gulp.watch('./src/**',['refresh']);
    watcher.on('change',function(e){
        console.log('File ' + e.path + ' was ' + e.type + ', running taskts...');
    });
});

gulp.task('browser-sync',['watch'],function(){
    return browserSync({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task("default", ["browser-sync"]);

gulp.task('refresh',['bundle'],browserSync.reload);

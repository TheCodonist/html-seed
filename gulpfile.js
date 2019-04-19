const {series,parallel} = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

function clean(cb) {
    cb();
}

function watch_changes() {
    watch(['./*.html','./assets/*.css','./assets/css/**/*','./assets/js/**/*'],function () {
        browserSync.reload()
    });
}

function browser_sync() {
    browserSync.init({
        server : {
            baseDir : './'
        }
    });
}

exports.default = parallel(watch_changes,browser_sync);
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile scss into css
function style() {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'public/'
        }
    });
    gulp.watch('./assets/scss/**/*.scss', style);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch('./public/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
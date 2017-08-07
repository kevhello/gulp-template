const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

// const SCRIPTS_PATH = 'public/scripts/**/*.js';
const CSS_PATH = 'public/styles/**/*.css';

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "public"
        }
    });

    gulp.watch('public/index.html', function() {
        browserSync.reload();
    });

    gulp.watch(CSS_PATH, function() {
        gulp.start('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('public/temp/styles/styles.css')
        .pipe(browserSync.stream());
});




// Scripts
// gulp.task('scripts', function() {
//     console.log('Starting scripts task');
//
//     return gulp.src()
//         .pipe(uglify())
//         .pipe(gulp.dest('public/dist'));
// });

// Images
// gulp.task('images', function() {
//     console.log('Starting images task');
// });
//
// // To run a default task, type: gulp
// gulp.task('default', function() {
//     console.log('Starting default task');
// });
//

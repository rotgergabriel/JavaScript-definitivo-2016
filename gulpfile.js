var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function () {
    return gulp.src('index.scss')
        .pipe(sass.sync({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('public'));
})

// gulp.task('styles', function() {
//     gulp
//         .src('index.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('public'));
// })

gulp.task('default', gulp.series('styles'))


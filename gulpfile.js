var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('styles', function () {
    return gulp.src('index.scss')
        .pipe(sass.sync({outputStyle:'expanded'}).on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('assets', function() {
    return gulp.src('assets/*')
        .pipe(gulp.dest('public'));
})

gulp.task('default', gulp.series('styles', 'assets'))


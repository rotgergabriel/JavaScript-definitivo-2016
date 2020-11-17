var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
browserify = require('browserify');
var source = require('vinyl-source-stream');


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

gulp.task('scripts', function () {
    browserify('./src/index.js')
        .transform(babel, { presets: ['env'] })
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public')) 
});

gulp.task('default', gulp.series('styles', 'assets', 'scripts'))


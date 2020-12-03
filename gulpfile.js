var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify')


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

function compile(watch) {
    var bundle = browserify('./src/index.js');

    if(watch) {
        bundle = watchify(bundle);
        bundle.on('update', function() {
            console.log('--> Bundling...');
            rebundle();
        })
    }

    function rebundle() {
        bundle
        .transform(babel, { presets: ['env'], plugins: [ 'syntax-async-functions', 'transform-regenerator'] })
        .bundle()
        .on('error' , function(error) { console.log(err); this.emit('end') })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public')) 
    }
    rebundle();
}

gulp.task('build', function() {
    return compile();
});

gulp.task('watch', function() {
    return compile(true);
});


gulp.task('default', gulp.series('styles', 'assets', 'build'));


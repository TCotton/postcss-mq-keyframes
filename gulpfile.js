var gulp = require('gulp');

var files = ['index.js', 'test/*.js', 'gulpfile.js'];

gulp.task('lint', function(done) {
    var eslint = require('gulp-eslint');
    return gulp.src(files)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError()).on('error', done);
});

gulp.task('test', function(done) {
    var mocha = require('gulp-mocha');
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha()).on('error', done);
});

gulp.task('jscs', function() {
    var jscs = require('gulp-jscs');
    return gulp.src(files)
        .pipe(jscs());
});

gulp.task('css', function() {
    var postcss = require('postcss');
    return gulp.src('src/**/*.css')
        .pipe(postcss([require('./index.js')]))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['lint', 'test', 'jscs']);

gulp.task('watch', function() {
    gulp.watch(files, ['lint', 'test', 'jscs']);
});

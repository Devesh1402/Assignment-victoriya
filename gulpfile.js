const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('client/style/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('client/dist/css/'));
});

gulp.task('clean', () => {
    return del([
        'client/dist/css/',
    ]);
});


gulp.task('watch', () => {
    gulp.watch('client/style/*.scss', (done) => {
        gulp.series([ 'styles'])(done);
    }); 
});

gulp.task('default', gulp.series(['styles']));



/*
var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('watch', () => {
    gulp.watch('client/style/*.scss', (done) => {
        gulp.series([ 'styles'])(done);
    }); 
});

gulp.task('default', gulp.series(['styles']));*/
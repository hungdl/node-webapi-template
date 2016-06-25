/// <reference path="typings/index.d.ts" />

'use strict'

var path = require('path'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    rimraf = require('gulp-rimraf'),
    mocha = require('gulp-mocha'),
    tsc = require('gulp-typescript'),
    sourcemap = require('gulp-sourcemaps'),
    config = require('./config')(),
    tsProject = tsc.createProject('tsconfig.json'),
    outDir = require('./tsconfig.json').compilerOptions.outDir;

gulp.task('clean', function () {
    return gulp.src(outDir, { read: false })
                .pipe(rimraf());    
})

gulp.task('compile', ['clean'], function () {
    let tsResult = gulp.src([config.srcFiles, config.testFiles])
        .pipe(sourcemap.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(outDir));
});

gulp.task('watch-ts', function () {
    return watch([config.srcFiles])
        .on('change', function (e) {
            console.log('TypeScript file ' + e + ' has been changed. Compiling.')
            gulp.start('compile');
            console.log('Compile completed.')
        })
});

//gulp.task('test', function () {
//    gulp.src(config.srcTests)
//        .pipe(mocha(config.mochaOpts))
//        .on('error', console.warn.bind(console))
//});

gulp.start('watch-ts');
// gulp.start('test');
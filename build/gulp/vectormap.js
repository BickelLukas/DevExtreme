// jshint node:true

"use strict";

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var gulpIf = require('gulp-if');
var merge = require('merge-stream');
var template = require('gulp-template');

var context = require('./context.js');
var headerPipes = require('./header-pipes.js');
var compressionPipes = require('./compression-pipes.js');

var VECTORMAP_UTILS_PATH = 'js/viz/vector_map.utils';
var VECTORMAP_UTILS_RESULT_PATH = path.join(context.RESULT_JS_PATH, 'vectormap-utils');
var VECTORMAP_DATA_RESULT_PATH = path.join(context.RESULT_JS_PATH, 'vectormap-data');

function transformFileName(fileName) {
    return path.join(VECTORMAP_UTILS_PATH, fileName) + '.js';
}

gulp.task('vectormap-data', ['vectormap-utils'], function() {
    var streams = [],
        processFiles = require(path.join('../..', VECTORMAP_UTILS_RESULT_PATH, 'dx.vectormaputils.node.js')).processFiles;

    if(!fs.existsSync(VECTORMAP_DATA_RESULT_PATH)) {
        fs.mkdirSync(VECTORMAP_DATA_RESULT_PATH);
    }

    processFiles('build/vectormap-sources', {
        output: VECTORMAP_DATA_RESULT_PATH,
        settings: 'build/vectormap-sources/_settings.js'
    }, function() {
        var files = fs.readdirSync(VECTORMAP_DATA_RESULT_PATH);

        files.forEach(file => {
            var data = fs.readFileSync(path.join(VECTORMAP_DATA_RESULT_PATH, file), 'utf8');

            streams.push(
                gulp.src('build/gulp/vectormapdata-template.jst')
                    .pipe(template({ data: data }))
                    .pipe(rename(file))
                    .pipe(headerPipes.useStrict())
                    .pipe(gulp.dest(VECTORMAP_DATA_RESULT_PATH))
            );
        });
    });
    return streams;
});

function createVectorMapUtilsStream(name, suffix, isMinify) {
    var settings = require(path.join('../..', VECTORMAP_UTILS_PATH, '_settings.json')),
        part = settings[name];

    return gulp.src(settings.commonFiles.concat(part.files).map(transformFileName))
        .pipe(concat(part.fileName + suffix + '.js'))
        .pipe(header(part.header || ''))
        .pipe(footer(part.footer || ''))
        .pipe(headerPipes.useStrict())
        .pipe(headerPipes.bangLicense())
        .pipe(gulpIf(isMinify, compressionPipes.minify()))
        .pipe(gulpIf(!isMinify, compressionPipes.beautify()))
        .pipe(gulp.dest(VECTORMAP_UTILS_RESULT_PATH));
}

gulp.task('vectormap-utils', function() {
    return merge(
        createVectorMapUtilsStream('browser', '.debug', false),
        createVectorMapUtilsStream('browser', '', true),
        createVectorMapUtilsStream('node', '', false)
    );
});

gulp.task('vectormap', ['vectormap-utils', 'vectormap-data']);

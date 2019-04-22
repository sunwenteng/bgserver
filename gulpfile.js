const gulp = require('gulp');
require('./gulpfile.server');

gulp.task('proto_all', ['proto_client', 'proto_server']);
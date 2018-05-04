var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('clean:mobile', function (cb) {
  del([
    'dist/report.csv',
    // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
    'dist/mobile/**/*',
    // 我们不希望删掉这个文件，所以我们取反这个匹配模式
    '!dist/mobile/deploy.json'
  ], cb);
});

gulp.task('watchsass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(watch('src/sass/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});
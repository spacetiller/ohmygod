var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('clean:mobile', function (cb) {
  del([
    'dist/report.csv',
    // ��������ʹ��һ��ͨ��ģʽ��ƥ�� `mobile` �ļ����е����ж���
    'dist/mobile/**/*',
    // ���ǲ�ϣ��ɾ������ļ�����������ȡ�����ƥ��ģʽ
    '!dist/mobile/deploy.json'
  ], cb);
});

gulp.task('watchsass', function() {
  return gulp.src('src/sass/*.scss')
    .pipe(watch('src/sass/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});
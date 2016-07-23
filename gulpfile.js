var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');

var sassPaths = [
  'node_modules/foundation-sites/scss'
];

gulp.task('sass', function() {
  return gulp.src(['scss/*.scss'])
    .pipe(sass({
      includePaths: sassPaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('web/css'));
});

gulp.task('js', function() {
  return gulp.src(['node_modules/foundation-sites/dist/foundation.js',
                   'node_modules/foundation-sites/vendor/jquery/dist/jquery.js',
                   'node_modules/vue/dist/vue.js',
                   'node_modules/vue/dist/vue-router.js',
                   'js/*.js'])
    .pipe(gulp.dest('web/js'));
});

gulp.task('webpack', function() {
  return gulp.src('js_sfc/sfc.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.vue$/,
            loader: 'vue'
          }
        ]
      },
      babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      },
      resolve: {
        modulesDirectories: ['node_modules']
      },
      output: {
        filename: 'sfc.js'
      }
    }))
    .pipe(gulp.dest('web/js/'));
});

gulp.task('default', ['sass', 'js', 'webpack'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch('node_modules/foundation-sites/dist/*.js', ['js']);
  gulp.watch('node_modules/foundation-sites/vendor/jquery/dist/*.js', ['js']);
  gulp.watch('node_modules/vue/dist/*.js', ['js']);
  gulp.watch('node_modules/vue-router/dist/*.js', ['js']);
  gulp.watch('js/*.js', ['js']);
  gulp.watch('js_sfc/**/*.js', ['webpack']);
  gulp.watch('js_sfc/**/*.vue', ['webpack']);
});

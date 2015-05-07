'use strict';

import gulp from 'gulp'
import less from 'gulp-less'
import source from 'vinyl-source-stream'
import babelify from 'babelify'
import watchify from 'watchify'
import browserify from 'browserify'
import app from './app'

const PORT = 9000;

const bundleTools = (() => {

  function jsError(err) {
    // https://github.com/sub-ck/node-resolve/issues/60
    // when a module isn't found it fails to show the file name
    // hopefully this gets fixed soon
    console.log(err.message);
    process.exit(1);
  }

  function cssError(err) {
    console.error(err.message);
    process.exit(1)
  }

  const lessOpts = { sourceMap: true }
      , browserifyOpts = { debug: true, cache: {}, packageCache: {}, fullPaths: true };

  return {

    css(opts) {
      return () => {
        function bundle() {
          console.log('compiling less %s -> %s', opts.entryPoint, opts.destDir);
          return gulp.src(opts.entryPoint)
          .pipe(less(lessOpts))
          .on('error', cssError)
          .pipe(gulp.dest(opts.destDir))
        }
        /*
         * So there's a nasty issue preventing gulp watch
         * from working in ES6 due to some outdated libs
         * in play. Commenting out watch as a workaround,
         * but hopefully the libs will update themselves
         * and eliminate the issue. Until then you need to
         * restart server for CSS to update :(
         * https://github.com/zloirock/core-js/issues/34
         */
        //gulp.watch(opts.watchGlob, bundle)
        return bundle();
      }
    },

    js(opts) {
      return () => {

        const bundler = watchify(browserify(opts.entryPoint, browserifyOpts)
        .transform(babelify))
        .on('update', bundle);

        return bundle();

        function bundle() {
          console.log('compiling js %s -> %s', opts.entryPoint, opts.destDir);
          return bundler.bundle()
          .on('error', jsError)
          .pipe(source(opts.outputFileName))
          .pipe(gulp.dest(opts.destDir))
        }
      }
    }
  }
})();

gulp.task('default', ['js', 'css'], done => {
  app.listen(PORT);
  setImmediate(() => {
    console.log('-----------------------');
    console.log('server listening on %d', PORT)
  });
  done()
});

gulp.task('js', bundleTools.js({
  entryPoint: './node_modules/lib/main.jsx',
  destDir: './client/js',
  outputFileName: 'main.js'
}));

gulp.task('css', bundleTools.css({
  entryPoint: './less/main.less',
  destDir: './client/styles',
  watchGlob: './less/**/*.less'
}));



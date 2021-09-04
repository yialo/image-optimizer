import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import jpegtran from  'imagemin-jpegtran';
import mozjpeg from  'imagemin-mozjpeg';
import pngquant from  'imagemin-pngquant';
import svgo from  'imagemin-svgo';
import zopfli from  'imagemin-zopfli';

import svgoConfig from '../svgo.config.js';

export const minify = () => (
  gulp.src('../minify/in/*.{jp?(e)g,png,svg}')
    .pipe(imagemin([
      jpegtran({ progressive: true }),
      mozjpeg({ quality: 90 }),
      pngquant({ speed: 1, quality: [0.8, 0.8] }),
      svgo(svgoConfig),
      zopfli({ more: true }),
    ]))
    .pipe(gulp.dest('../minify/out'))
);

'use strict';

const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const jpegtran = require('imagemin-jpegtran');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const svgo = require('imagemin-svgo');
const zopfli = require('imagemin-zopfli');

const svgoOptions = require('../svgo.config');

const minify = () => (
  src('../minify/in/*.{jp?(e)g,png,svg}')
    .pipe(imagemin([
      jpegtran({ progressive: true }),
      mozjpeg({ quality: 90 }),
      pngquant({ speed: 1, quality: [0.8, 0.8] }),
      svgo(svgoOptions),
      zopfli({ more: true }),
    ]))
    .pipe(dest('../minify/out'))
);

module.exports.imagemin = minify;

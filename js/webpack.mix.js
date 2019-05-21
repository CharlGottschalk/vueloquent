const mix = require('laravel-mix');

mix
  .js('src/vueloquent.plugin.js', 'dist/')
  .js('src/vueloquent.plain.js', 'dist/');

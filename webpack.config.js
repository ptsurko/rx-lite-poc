var path = require('path');

module.exports = {
  entry: './rx.global.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    loaders: [{
      test   : /.js$/,
      loader: 'babel-loader',
      query: {
        presets: 'es2015'
      }
    }]
  }
};

module.exports = function(opts) {
  if (opts === undefined) opts = {};

  var plugins = [];

  if (opts.env === 'prod') {
    var webpack = require('webpack');
    var plugin = new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    });

    plugins.push(plugin);
  }

  return {
    entry: './src/app/index.js',
    // devtool: 'cheap-module-source-map',
    output: {
      path: 'web',
      filename: 'script.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: plugins,
  };
};
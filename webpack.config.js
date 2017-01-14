const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const env = process.env.NODE_ENV;
const plugins = [];

if (env === 'production') {
  plugins.push(...[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        screw_ie8: true,
      },
    }),
  ]);
}

module.exports = {
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: path.join(__dirname, 'web'),
    filename: `bundle.js`,
    // publicPath: '/assets',
    publicPath: '/web',
  },
  devServer: {
    // inline: true,
    contentBase: './web',
    host: '0.0.0.0',
    port: 8090,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-stage-0',
            'babel-preset-react',
          ].map(require.resolve),
          plugins: [
            'babel-plugin-transform-decorators-legacy',
            'babel-plugin-add-module-exports',
          ].map(require.resolve),
        },
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
      },
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   loader: 'file?name=/fonts/[name].[ext]',
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'url?limit=65000&mimetype=image/svg+xml&name=/fonts/[name].[ext]',
      // },
      {
        test: /\.eot$/,
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=/fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=/fonts/[name].[ext]',
      },
      {
        test: /\.woff$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=/fonts/[name].[ext]',
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=/fonts/[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          `file-loader?hash=sha512&digest=hex&name=${env === 'production' ? '/' : ''}images/[hash].[ext]`,
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  plugins,
  postcss() {
    return [
      precss,
      autoprefixer({
        browsers: '> 0.5%',
      }),
    ];
  },
};
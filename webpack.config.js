module.exports = {
  entry: './src/app/index.js',
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
};
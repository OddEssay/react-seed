module.exports = {
  entry: './src/app.jsx',
  output: {
    path: './build',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
}

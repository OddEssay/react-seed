module.exports = {
  entry: './src/app.jsx',
  output: {
    path: './build',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },
}

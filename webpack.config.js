const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

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
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    root: [__dirname],
    extensions: [ '', '.jsx', '.js' ],
  },
  plugins,
}

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.css', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    open: {
      app: {
        // в package.json для запуска в chrome
        // "satart": "webpack-dev-server --mode development --open --hot",
        // name: 'chrome',
        name: 'google chrome',
        // name: 'Google Chrome',
      },
    },
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        // generator: {
        //   outputPath: 'assets/img',
        // },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: ['source-map-loader'],
      // },
    ],
  },
};

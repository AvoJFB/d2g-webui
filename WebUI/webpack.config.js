const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  devtool: '#eval',
  entry: [
    './app/index',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      'app',
      'node_modules',
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_URL: JSON.stringify('http://ec2-54-244-215-103.us-west-2.compute.amazonaws.com'),
      },
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new StyleLintPlugin({
      files: ['**/*.s?(a|le|c)ss'],
      syntax: 'sass',
      failOnError: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'app'),
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        loader: 'file-loader?name=static/[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=static/fonts/[name].[ext]',
      },
    ],
  },
};

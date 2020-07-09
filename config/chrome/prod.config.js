const path = require('path');
const webpack = require('webpack');

const customPath = path.join(__dirname, './customPublicPath');

module.exports = {
  entry: {
    popup: [customPath, path.join(__dirname, '../app/Popup')],
    background: [
      customPath,
      path.join(__dirname, '../chrome/extension/background'),
    ],
    inject: [customPath, path.join(__dirname, '../app/inject/index.js')],
  },
  output: {
    path: path.join(__dirname, '../build/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-optimize'],
        },
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      },
    ],
  },
};

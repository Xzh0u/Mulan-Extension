const path = require('path');
const webpack = require('webpack');

const host = 'localhost';
const port = 3000;
const customPath = path.join(__dirname, './customPublicPath');
const hotScript =
  'webpack-hot-middleware/client?path=__webpack_hmr&dynamicPublicPath=true';

const workingDir = path.resolve(__dirname, '../../');
const chromeSrcDir = path.join(workingDir, './src/chrome');
const chromeDevDir = path.join(workingDir, './chromedev');

const baseDevConfig = webpackEnv => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      popup: [
        customPath,
        hotScript,
        path.join(chromeSrcDir, './popup/index.tsx'),
      ],
      background: [
        customPath,
        hotScript,
        path.join(workingDir, './chrome/extension/background'),
      ],
    },
    devMiddleware: {
      publicPath: `http://${host}:${port}/js`,
      stats: {
        colors: true,
      },
      noInfo: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
    },
    hotMiddleware: {
      path: '/js/__webpack_hmr',
    },
    output: {
      path: path.join(chromeDevDir, './js'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),
      new webpack.DefinePlugin({
        __HOST__: `'${host}'`,
        __PORT__: port,
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.resolve(__dirname, '../../src'),
      },
    },
    module: {
      rules: [
        // Process application JS with Babel.
        // The preset includes JSX, Flow, TypeScript, and some ESnext features.
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: workingDir,
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides',
            ),
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                {
                  loaderMap: {
                    svg: {
                      ReactComponent:
                        '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                    },
                  },
                },
              ],
            ],
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: false,
          },
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]',
              options: {
                importLoaders: 3,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('tailwindcss'),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };
};

const injectPageConfig = baseDevConfig();
injectPageConfig.entry = [
  customPath,
  path.join(chromeSrcDir, './inject/index.tsx'),
];
delete injectPageConfig.hotMiddleware;
delete injectPageConfig.module.rules[0].options;
injectPageConfig.plugins.shift(); // remove HotModuleReplacementPlugin
injectPageConfig.output = {
  path: path.join(chromeDevDir, './js'),
  filename: 'inject.bundle.js',
};
const appConfig = baseDevConfig();

module.exports = [injectPageConfig, appConfig];

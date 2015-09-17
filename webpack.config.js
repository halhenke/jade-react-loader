var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'production';


var embedFileSize = 65536;
var assetsLoaders = [
  {
    test: /\.css$/,
    loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
  },
  {test: /\.jade$/, loader: 'jade-react'}
];

var entry = [
  './src/reset.css',
  './src/normalize.css',
  // './src/index.js'
  './src/example/App.js'
];

var production = {
  devtool: 'source-map',
  entry: entry,
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    })
  ],

  module: {
    loaders: assetsLoaders.concat([
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ])
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};


var development = {
  devtool: 'eval',

  entry: entry.concat([
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ]),
  output: {filename: 'bundle.js', path: path.resolve('./example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + env + '"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: assetsLoaders.concat([
      // {test: /\.js$/, loaders: ['react-hot', 'babel'], include: [path.resolve('src')]}
      {test: /\.js$/, loaders: ['babel'], include: [path.resolve('src')]}
    ]),
    preLoaders: [
      {test: /\.js$/, loaders: ['eslint'], include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true},
  eslint: {configFile: 'src/.eslintrc'},
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


module.exports = env === 'production' ? production : development;

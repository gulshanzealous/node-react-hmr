let fs = require('fs');
const path = require('path')
let webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin')
const nodeExternals = require('webpack-node-externals')


let nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    return nodeModules[mod] = "commonjs " + mod;
  }
);

module.exports = {

  entry: [
      'webpack/hot/poll?1000',
      './start.js'
  ],
  watch:true,
  target: 'node',
  devtool:'inline-source-map',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  node: {
    __filename: false,
    __dirname: false
  },
  output: {
    filename: 'production.js',    
    path: path.resolve(__dirname,"build"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: path.resolve(__dirname,"client"),     
      }
    ]
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new StartServerPlugin('production.js'),    
      new webpack.NamedModulesPlugin(),
      new CleanWebpackPlugin([path.resolve(__dirname,"build")]),
    ],

  externals: nodeModules

};
/*
 * Module Dependencies
 * */

var webpack = require('webpack')
var path = require('path')
var environment = process.env.NODE_ENV || 'dev'
var uglifyJs = new webpack.optimize.UglifyJsPlugin()

// Routes
var APP_DIR = path.join(__dirname, 'src', 'assets', 'js')
var BUILD_DIR = path.join(__dirname, 'dist', 'assets') //Outpout

var config = {
  entry: APP_DIR,
  cache: false,
  output: {
    path: BUILD_DIR,
    filename: 'js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins:[
    uglifyJs
  ]
}

module.exports = config;

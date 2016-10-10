/*
 * Module Dependencies
 * */

var webpack = require('webpack')
var path = require('path')

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
  }
}

module.exports = config;

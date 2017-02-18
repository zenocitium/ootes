var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  entry: {
    ootes: [
      'webpack-dev-server/client?http://localhost:8080',
      './app/main.js',
    ]
  },
  output: {
    filename: 'public/bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    eslint: {
      failOnWarning: false,
      failOnError: true
    },
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css','sass'])
      },
      {
        test: /\.font\.(js|json)$/,
        loader: "style!css!fontgen"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("public/styles.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "Tether": 'tether'
    })
  ]
};

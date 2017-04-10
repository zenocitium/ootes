var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');
var path = require('path')

module.exports = {

  entry: './app/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js',
      'particles$': 'particles.js/particles.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.font\.(js|json)$/,
        use: [{
          loader: "style-loader"
        },{
          loader: "css-loader"
        },{
          loader: "fontgen-loader"
        }]

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
    }),

  ]

}

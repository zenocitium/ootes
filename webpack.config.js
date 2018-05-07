var webpack = require('webpack');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {

  mode: 'development',

  entry: './app/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js',
      'particles$': 'particles.js/particles.js'
    }
  },

  devtool: 'eval',

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
          loader: "webfonts-loader"
        }]

      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    hot: true
  }

}

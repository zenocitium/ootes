var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
  entry: {
    ootes: getEntrySources([
      './app/main.js'
    ])
  },
  output: {
    filename: 'public/bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js',
      'particles$': 'particles.js/particles.js'
    }
  },
  module: {
    eslint: {
      failOnWarning: false,
      failOnError: true
    },
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ],
}

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('jaha?');
    sources.push('webpack-dev-server/client?http://localhost:8080');
  }

  return sources;
}

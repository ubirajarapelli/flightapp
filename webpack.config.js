const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prefixer = require('postcss-prefix-selector');

module.exports={
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3003,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },

  devtool:  "cheap-eval-source-map",
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false
  },

    entry:{
     index:'./src/index.js',
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      chunkFilename:'[id][hash].js',
      publicPath:'/',
      crossOriginLoading: false,
      library: 'flightApp',
      libraryTarget: 'window'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use:['babel-loader']
          },
          {
            test:/\.css$/,
            loaders:[
              { loader: MiniCssExtractPlugin.loader },
              { loader:"css-loader",
                options:{
                  minimize:true,
                  sourceMap:true
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    prefixer({
                      prefix: '#cars-app'
                    })
                  ]
                }
              }
            ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                attrs: [':data-src'],
                minimize:true
              }
            }
          },
          {
            test: /\.(png|jpg|gif|jpeg|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                 name:'[path][name].[ext]',

                }
              }
            ]
          }
        ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template:__dirname+'/public/index.html',
        inject:'body',
        filename:'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id][hash].css"
      }),
      new UglifyJsPlugin({
        sourceMap: true
      })
    ],
    mode: 'production'
}

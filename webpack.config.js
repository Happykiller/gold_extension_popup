const path = require("path")
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin") 

const dotenv = require('dotenv').config().parsed;
const dotenvlocal = require('dotenv').config({
  path: '.env.local'
 , override: true 
}).parsed;
const config = Object.assign({}, dotenv, dotenvlocal);
 
module.exports = { 
  entry: "./src/index.tsx",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: "all",
    port: config.APP_PORT,
    historyApiFallback: true,
  },
  devtool: "source-map",
  resolve: { 
    extensions: [".ts", ".tsx", ".js", ".json", '.scss', '.svg'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@component': path.resolve(__dirname, 'src/component/'),
      '@usecase': path.resolve(__dirname, 'src/usecase/'),
      '@service': path.resolve(__dirname, 'src/service/'),
    },
    fallback: { "crypto": false }
  }, 
  output: { 
    path: path.join(__dirname, "/dist"), 
    filename: "index_bundle.js",
    publicPath: '/'
  }, 
  module: { 
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {  
        test: /\.tsx?$/,  
        loader: "ts-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({      // Instancie le plugin
      template: "./public/index.html"  // Spécifie notre template
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(config)
    }),
  ]
}
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('../css/[name].css');

const config = {
  entry: {
   app: './scripts/app.js'
  },
  output: {
    path: __dirname + '/public/js',
    publicPath: '/public/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          presets: [['es2015', {"modules": false}]],
          plugins:[
            ["transform-react-jsx"]
          ],
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','postcss-loader']
        }),
      }
      ]
  },
  plugins: [
      extractCSS
  ]
};


module.exports = config;
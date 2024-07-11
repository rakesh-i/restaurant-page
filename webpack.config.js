const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    location: './src/loc.js',
    menu: './src/menu.js', 
    about: './src/about.js',
    gallery: '/src/gallery.js',
  },
  devtool: 'inline-source-map',
  devServer:{
    static: './dist',
  },
  plugins:[
    new HtmlWebpackPlugin({
        template: '/src/index.html',
        title: 'Restaurent', 
        inject: 'body',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)&/i,
        type: 'asset/resource',
      },
      {
        test:/\.csv$/i,
        use: ['csv-loader'],
      },
      {
        test:/\.xml$/i,
        use:['xml-loader'],
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/app/app.tsx'),

  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [

      // TypeScript
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },


      // SCSS/CSS 
      {
        test:/\.(s*)css$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/public/index.html'
    })
  ],

  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  
};
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const markdown = require('marked');

fs.writeFileSync(
  '.readme.html',
  markdown(fs.readFileSync('README.md', 'utf8'))
);

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: '.readme.html'
    })
  ],
  output: {
    filename: `gdpr-cookie-monster.min.js`,
    path: path.resolve(__dirname, 'dist')
  }
};

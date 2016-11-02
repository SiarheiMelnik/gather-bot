
const config = require('./webpack.base');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(config, {
  entry: {
    'bot-slack': [
      'babel-polyfill',
      './src/slack-bot'
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'package.json', to: '.build' },
    ])
  ]
});

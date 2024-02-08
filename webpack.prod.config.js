const merge  = require('webpack-merge');
const CSSMinimiserWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
cnst common = require('webpack.common.config');

module.exports = merge(common, {

  mode: 'production',

  optimization: {
    minimizer: [
      new TerserWebpackPlugin({}),
      new CSSMinimiserWebpackPlugin({})
    ],
  }
});

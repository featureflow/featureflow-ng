const webpack = require('webpack');
const packageJSON = require('./package.json');
const path = require('path');

const version = packageJSON.version;

const banner =
`Featureflow NG Angular 1 Client v${version}
Web: https://www.featureflow.io/
Date: ${new Date().toISOString()}
Licence: Apache-2.0`;

module.exports = {
  output: {
    library: 'FeatureflowProvider',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
      alias: {
          angular: path.resolve(path.join(__dirname, "node_modules", "angular"))
      }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version)
    }),
    new webpack.BannerPlugin({
      entryOnly: true,
      banner: banner
    })
  ]
};

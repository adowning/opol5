/*eslint-disable */
// var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool: "sourcemaps",
    // Merged into the final Webpack config
    plugins: [
      //   new BundleAnalyzerPlugin(),
      new CompressionPlugin({
        include: /\/includes/
      })
    ]
  }
};

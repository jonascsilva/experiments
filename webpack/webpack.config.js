const path = require("path");
const { BundleStatsWebpackPlugin } = require("bundle-stats-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map",
  optimization: {
    usedExports: true,
    minimize: true,
  },
  plugins: [new BundleStatsWebpackPlugin()],
};

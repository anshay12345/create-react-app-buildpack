const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge([
  common,
  {
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 3001,
      historyApiFallback: true,
    },
  },
]);

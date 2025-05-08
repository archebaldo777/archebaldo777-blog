const path = require(`path`);
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: path.resolve(__dirname, `src`, `index.ts`),
  output: {
    filename: `[name].[contenthash:8].js`,
    path: path.resolve(__dirname, `dist`),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: `ts-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`, `.json`],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `public`, `index.html`),
    }),
  ],
};

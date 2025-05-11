import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, type Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { type BuildOptions } from "./types/common";

export const buildPlugins = (
  options: BuildOptions
): Configuration[`plugins`] => {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash:8].css`,
      chunkFilename: `css/[name].[contenthash:8].css`,
    }),
  ];
};

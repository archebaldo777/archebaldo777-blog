import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, type Configuration } from "webpack";

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
  ];
};

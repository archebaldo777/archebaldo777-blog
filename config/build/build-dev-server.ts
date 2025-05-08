import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { type BuildOptions } from "./types/common";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port } = options;

  return {
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
  };
};

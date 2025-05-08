import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";

import { type Configuration } from "webpack";
import { type BuildOptions } from "./types/common";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: `[name].[contenthash:8].js`,
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
};

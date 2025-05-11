import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { type ModuleOptions } from "webpack";
import { type BuildOptions } from "./types/common";

export const buildLoaders = (options: BuildOptions): ModuleOptions[`rules`] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  const cssLoader = {
    loader: `css-loader`,
    options: {
      modules: {
        auto: true,
        namedExport: false,
        localIdentName: isDev
          ? `[path][name]__[local]--[hash:base64:8]`
          : `[hash:base64:8]`,
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? `style-loader` : MiniCssExtractPlugin.loader,
      cssLoader,
      `sass-loader`,
    ],
  };

  return [typescriptLoader, scssLoader];
};

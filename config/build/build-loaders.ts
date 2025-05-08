import { type ModuleOptions } from "webpack";

export const buildLoaders = (): ModuleOptions[`rules`] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: `ts-loader`,
    exclude: /node_modules/,
  };

  return [typescriptLoader];
};

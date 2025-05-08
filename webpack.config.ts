import path from "path";

import { buildWebpackConfig } from "./config/build/build-webpack-config";

import { type BuildEnvs, type BuildPaths } from "./config/build/types/common";

const buildPaths: BuildPaths = {
  entry: path.resolve(__dirname, `src`, `index.ts`),
  build: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

export default (env: BuildEnvs) => {
  const { mode = `development`, port = 3000 } = env;
  const isDev = mode === `development`;

  return buildWebpackConfig({ mode, paths: buildPaths, port, isDev });
};

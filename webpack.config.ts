import path from "path";

import { buildWebpackConfig } from "./config/build/build-webpack-config";

import { type BuildModes, type BuildPaths } from "./config/build/types/common";

const buildMode: BuildModes = `development`;
const buildPaths: BuildPaths = {
  entry: path.resolve(__dirname, `src`, `index.ts`),
  build: path.resolve(__dirname, `dist`),
  html: path.resolve(__dirname, `public`, `index.html`),
};

const config = buildWebpackConfig({ mode: buildMode, paths: buildPaths });

export default config;

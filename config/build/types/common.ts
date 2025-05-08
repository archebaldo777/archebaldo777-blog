export type BuildModes = `development` | `production`;

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnvs {
  mode: BuildModes;
  port: number;
}

export interface BuildOptions {
  mode: BuildModes;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}

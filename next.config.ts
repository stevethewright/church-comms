import type { NextConfig } from "next";

import packageJson from "./package.json";
const nextConfig: NextConfig = {
  env: {
    APP_VERSION: packageJson.version,
  },
  output: "standalone",
};

export default nextConfig;

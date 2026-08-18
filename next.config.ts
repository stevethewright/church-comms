import type { NextConfig } from "next";

import packageJson from "./package.json";
const nextConfig: NextConfig = {
  env: {
    APP_VERSION: packageJson.version,
  },
  output: "standalone",
  serverExternalPackages: ["@prisma/client", "pg"],
};

export default nextConfig;

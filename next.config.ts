import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const projectRoot = dirname(fileURLToPath(import.meta.url));
const nextConfig: NextConfig = { poweredByHeader: false, outputFileTracingRoot: projectRoot, agentRules: false };
export default nextConfig;

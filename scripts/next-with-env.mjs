import { spawn } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const [command, ...args] = process.argv.slice(2);

if (command !== "dev" && command !== "start") {
  throw new Error("Use this launcher with the dev or start command.");
}

loadEnvConfig(projectRoot, command === "dev");

const nextCli = join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextCli, command, ...args], {
  cwd: projectRoot,
  env: process.env,
  stdio: "inherit",
});

child.on("error", error => {
  console.error("Could not start Next.js:", error.message);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  process.exitCode = signal ? 1 : code ?? 1;
});

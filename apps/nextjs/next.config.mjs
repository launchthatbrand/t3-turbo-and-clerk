// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { withExpo } from "@expo/next-adapter";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  transpilePackages: [
    "@acme/api",
    "@acme/app",
    "@acme/db",
    "react-native",
    "react-native-web",
    "solito",
    "moti",
    "react-native-reanimated",
    "nativewind",
    "react-native-gesture-handler",
    "@shopify/flash-list",
    "recyclerlistview",
  ],
  // We already do linting on GH actions
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
};

export default withExpo(nextConfig);

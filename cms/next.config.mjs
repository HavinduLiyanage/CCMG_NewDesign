import path from "node:path";
import { fileURLToPath } from "node:url";
import { withPayload } from "@payloadcms/next/withPayload";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // The public Vite app has its own lockfile one directory above this app.
  // Pin Turbopack to the CMS directory so it never traverses that workspace.
  turbopack: {
    root: dirname,
  },
};

export default withPayload(nextConfig);

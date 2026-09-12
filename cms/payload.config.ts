import "./src/env";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { CaseStudies } from "./src/collections/CaseStudies";
import { ContactSubmissions } from "./src/collections/ContactSubmissions";
import { Insights } from "./src/collections/Insights";
import { Media } from "./src/collections/Media";
import { Partners } from "./src/collections/Partners";
import { Services } from "./src/collections/Services";
import { TeamMembers } from "./src/collections/TeamMembers";
import { Users } from "./src/collections/Users";
import { HomePage } from "./src/globals/HomePage";
import { SiteSettings } from "./src/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const allowedOrigins = (process.env.CMS_CORS_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const payloadSecret = process.env.PAYLOAD_SECRET;
const databaseUrl = process.env.DATABASE_URL;
const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

if (!payloadSecret) {
  throw new Error("PAYLOAD_SECRET must be set before CCMG CMS can start.");
}

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be set before CCMG CMS can start.");
}

if (process.env.NODE_ENV === "production" && allowedOrigins.length === 0) {
  throw new Error("CMS_CORS_ORIGINS must include the public website origin in production.");
}

if (process.env.NODE_ENV === "production" && !blobToken) {
  throw new Error("BLOB_READ_WRITE_TOKEN must be set in production so CMS uploads are persistent.");
}

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      afterNav: ["./components/NavigationFooter.tsx"],
      beforeDashboard: ["./components/DashboardIntroduction.tsx"],
      beforeLogin: ["./components/LoginIntroduction.tsx"],
      graphics: {
        Icon: "./components/CcmgIcon.tsx",
        Logo: "./components/CcmgLogo.tsx",
      },
    },
    importMap: {
      baseDir: path.resolve(dirname, "src/app/(payload)"),
    },
  },
  collections: [Users, Media, Services, CaseStudies, Insights, TeamMembers, Partners, ContactSubmissions],
  cors: allowedOrigins,
  csrf: allowedOrigins,
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
    // Keep the live Neon schema under versioned migration control. Automatic
    // development pushes can be convenient, but must never modify the shared
    // content database by accident.
    push: false,
    migrationDir: path.resolve(dirname, "src/migrations"),
  }),
  editor: lexicalEditor(),
  globals: [HomePage, SiteSettings],
  plugins: [
    vercelBlobStorage({
      // Local development continues to use cms/media. Production uploads go
      // directly to Vercel Blob, avoiding Vercel's 4.5 MB server-upload cap.
      enabled: Boolean(blobToken),
      collections: {
        [Media.slug]: true,
      },
      token: blobToken,
      clientUploads: true,
      addRandomSuffix: true,
    }),
  ],
  secret: payloadSecret,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import { CaseStudies } from "./src/collections/CaseStudies";
import { ContactSubmissions } from "./src/collections/ContactSubmissions";
import { Insights } from "./src/collections/Insights";
import { Media } from "./src/collections/Media";
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

if (!payloadSecret) {
  throw new Error("PAYLOAD_SECRET must be set before CCMG CMS can start.");
}

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be set before CCMG CMS can start.");
}

if (process.env.NODE_ENV === "production" && allowedOrigins.length === 0) {
  throw new Error("CMS_CORS_ORIGINS must include the public website origin in production.");
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, "src/app/(payload)"),
    },
  },
  collections: [Users, Media, Services, CaseStudies, Insights, TeamMembers, ContactSubmissions],
  cors: allowedOrigins,
  csrf: allowedOrigins,
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
    push: process.env.NODE_ENV !== "production",
  }),
  editor: lexicalEditor(),
  globals: [HomePage, SiteSettings],
  secret: payloadSecret,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
});

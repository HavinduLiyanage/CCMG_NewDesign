import dotenv from "dotenv";

// Payload's CLI is not a Next.js process, so it does not automatically read
// `.env.local`. Load local values first. Explicit deployment environment
// variables and `.env.local` values retain precedence over `.env`.
dotenv.config({ path: ".env.local", override: false, quiet: true });
dotenv.config({ path: ".env", override: false, quiet: true });

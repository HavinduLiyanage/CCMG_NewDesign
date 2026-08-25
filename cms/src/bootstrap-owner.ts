import config from "@payload-config";
import { getPayload } from "payload";

const email = process.env.CMS_BOOTSTRAP_OWNER_EMAIL?.trim().toLowerCase();
const password = process.env.CMS_BOOTSTRAP_OWNER_PASSWORD;
const name = process.env.CMS_BOOTSTRAP_OWNER_NAME?.trim() || "CCMG Owner";

if (!email || !password) {
  throw new Error(
    "Set CMS_BOOTSTRAP_OWNER_EMAIL and CMS_BOOTSTRAP_OWNER_PASSWORD in the deployment secret manager before bootstrapping the first Owner.",
  );
}

if (password.length < 16) {
  throw new Error("CMS_BOOTSTRAP_OWNER_PASSWORD must contain at least 16 characters.");
}

const payload = await getPayload({ config });

try {
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: email } },
    limit: 1,
    overrideAccess: true,
  });

  if (existing.docs[0]) {
    console.log(`Owner account already exists for ${email}; no password was changed.`);
  } else {
    await payload.create({
      collection: "users",
      data: { email, password, name, role: "owner" },
      overrideAccess: true,
    });
    console.log(`Created the initial CCMG CMS Owner account for ${email}.`);
  }
} finally {
  await payload.destroy();
}

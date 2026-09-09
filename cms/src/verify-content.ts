import config from "@payload-config";
import { getPayload } from "payload";

const payload = await getPayload({ config });

try {
  const collections = ["users", "media", "services", "case-studies", "insights", "team-members", "partners"] as const;
  const results = await Promise.all(
    collections.map(async (collection) => [
      collection,
      (await payload.count({ collection, overrideAccess: true })).totalDocs,
    ] as const),
  );
  const settings = await payload.findGlobal({ slug: "site-settings", overrideAccess: true });
  const homePage = await payload.findGlobal({ slug: "home-page", overrideAccess: true });

  console.log(JSON.stringify({
    counts: Object.fromEntries(results),
    companyName: settings.companyName,
    homeTitle: homePage.hero?.title,
  }, null, 2));
} finally {
  await payload.destroy();
}

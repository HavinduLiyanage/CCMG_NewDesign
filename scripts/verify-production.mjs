// Read-only checks. No credentials, writes, migrations, or seed operations.
const cms = new URL(process.argv[2] || 'https://ccmg-cms-seven.vercel.app');
const website = new URL(process.argv[3] || 'https://ccmg-new-design.vercel.app');
if (cms.protocol !== 'https:' || website.protocol !== 'https:') {
  throw new Error('Use HTTPS production origins.');
}
if (cms.username || cms.password || website.username || website.password) {
  throw new Error('Do not supply credentials in URLs.');
}

let failures = 0;
const fail = (message) => { failures++; console.error(`FAIL ${message}`); };
const pass = (message) => console.log(`PASS ${message}`);

async function checkContent(path, collection) {
  try {
    const response = await fetch(new URL(path, cms.origin), {
      headers: { Accept: 'application/json', Origin: website.origin },
      redirect: 'manual',
      signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) return fail(`${path}: HTTP ${response.status}`);
    if (!response.headers.get('content-type')?.includes('application/json')) {
      return fail(`${path}: expected JSON; check deployment protection or routing.`);
    }
    const data = await response.json();
    if (response.headers.get('access-control-allow-origin') !== website.origin) {
      fail(`${path}: CORS must allow ${website.origin}`);
    }
    if (collection) {
      if (!Array.isArray(data.docs)) return fail(`${path}: missing docs array.`);
      if (!data.docs.length) return fail(`${path}: no published content. Check existing drafts before seeding.`);
      if (data.docs.some((doc) => doc._status !== 'published')) {
        return fail(`${path}: anonymous request received non-published content.`);
      }
      pass(`${collection}: ${data.totalDocs ?? data.docs.length} public documents`);
      if (data.hasNextPage) console.log(`NOTE ${collection}: only the first 100 documents were inspected.`);
    } else {
      const populated = path.includes('home-page') ? data.hero?.title : data.companyName;
      if (!populated || data._status === 'draft') return fail(`${path}: publish the completed global in CMS.`);
      pass(`${path}: public content available`);
    }
  } catch (error) {
    fail(`${path}: ${error.message}`);
  }
}

async function checkPrivate(collection) {
  try {
    const response = await fetch(new URL(`/api/${collection}?limit=1`, cms.origin), {
      headers: { Accept: 'application/json' },
      redirect: 'manual',
      signal: AbortSignal.timeout(30000),
    });
    if ([401, 403].includes(response.status)) pass(`${collection}: anonymous access denied`);
    else fail(`${collection}: expected 401/403, received ${response.status}; inspect access rules.`);
  } catch (error) {
    fail(`${collection}: ${error.message}`);
  }
}

console.log(`Checking ${cms.origin} for website origin ${website.origin}`);
await Promise.all([
  ...['services', 'case-studies', 'insights', 'team-members', 'partners'].map(
    (collection) => checkContent(`/api/${collection}?depth=1&limit=100`, collection),
  ),
  checkContent('/api/globals/home-page?depth=1'),
  checkContent('/api/globals/site-settings'),
  checkPrivate('users'),
  checkPrivate('contact-submissions'),
]);
console.log(failures ? `${failures} check(s) failed.` : 'API checks passed. Next: verify a published edit and a Blob image in the public website.');
process.exitCode = failures ? 1 : 0;

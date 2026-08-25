import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const assetsDir = join(projectRoot, "public", "assets");
const inventoryPath = join(projectRoot, "docs", "research", "routes", "route-inventory.json");

const pages = JSON.parse(await readFile(inventoryPath, "utf8"));
const existing = new Set(await readdir(assetsDir));
const assets = [...new Set(pages.flatMap((page) => page.images.map((image) => image.src)))].filter(Boolean);
const queue = assets.filter((url) => !existing.has(basename(new URL(url).pathname)));
const completed = [];
const failures = [];

await mkdir(assetsDir, { recursive: true });

async function download(url) {
  const filename = basename(new URL(url).pathname);
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(join(assetsDir, filename), bytes);
  completed.push({ filename, bytes: bytes.length });
}

async function worker() {
  while (queue.length) {
    const url = queue.shift();
    try {
      await download(url);
    } catch (error) {
      failures.push({ url, error: String(error) });
    }
  }
}

await Promise.all(Array.from({ length: 4 }, worker));

console.log(JSON.stringify({ downloaded: completed.length, skipped: assets.length - queue.length - completed.length, failures }, null, 2));

if (failures.length) process.exitCode = 1;

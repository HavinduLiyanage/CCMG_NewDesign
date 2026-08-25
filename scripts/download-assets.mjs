import { mkdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = new URL("../public/assets/", import.meta.url);
const outputPath = fileURLToPath(outputDir);

const assets = [
  "https://framerusercontent.com/images/4DqGwUqDnx49TJFKP55aBWcrNA.png",
  "https://framerusercontent.com/images/7yGOh7DYr11HtXDswYhX77k.png",
  "https://framerusercontent.com/images/RzuKiGIxyf4IqJpamwo0bzyUPGI.webp",
  "https://framerusercontent.com/images/Ka4em1hAfkmNJp7mMT3Bnw5RWzk.jpg",
  "https://framerusercontent.com/images/8HTYyC16R1aOugiYMCMJ6RTg5s.jpg",
  "https://framerusercontent.com/images/Qk9VEeOPEnFDj1PLTrdhmphT3o.webp",
  "https://framerusercontent.com/images/wkYWxIzXmC5baBQHByUPXSX4.webp",
  "https://framerusercontent.com/images/BraBZPybzFplQ4ZyTMWvnBc5X8.webp",
  "https://framerusercontent.com/images/8BJ8SnmEd9C87u5oFHupv4VolPg.webp",
  "https://framerusercontent.com/images/4Zx7DVBTo5PGL5e1p7CD0XPVHqU.png",
  "https://framerusercontent.com/images/dFy0nXZwcPhYdYoFBh60BHzNMk.png",
  "https://framerusercontent.com/images/Mg8tOysjre1ZZoyXaUBAuxBQ.png",
  "https://framerusercontent.com/images/c8xBKOMxGz8kAKnTJw401CPTB68.png",
  "https://framerusercontent.com/images/WglifWDc7WDhT0gPddlGjko9Zc.webp",
  "https://framerusercontent.com/images/vv8eGxaNpjLuPzbqFIVKzPSbQ.webp",
  "https://framerusercontent.com/images/eCgL0t1aBdLr4ylSkIR50yrrF8.webp",
  "https://framerusercontent.com/images/CXUlgezUocPEuWex9QJ2NxJRTw.png?scale-down-to=1024&width=800&height=1200",
  "https://framerusercontent.com/images/4Rxf04vDCCbpef1fYbYFmFa3AqI.webp?scale-down-to=2048&width=3500&height=2333",
  "https://framerusercontent.com/images/YCHJGgkRB7sMQLRvuj4cAnDgI.png?scale-down-to=1024&width=3000&height=1527",
  "https://framerusercontent.com/images/bALzNKWF74Li4qPs3Fnux5hNyQ.jpg?scale-down-to=1024&width=2560&height=1703",
  "https://framerusercontent.com/images/JY6gnnC5szRzDaloNrjsKReabo.webp?scale-down-to=1024&width=3649&height=2433",
  "https://framerusercontent.com/images/eoKG5OCrfjIcZFq8Ajo0MwUVJ6c.jpeg?scale-down-to=1024&width=1280&height=960",
  "https://framerusercontent.com/images/6Kub6esEciO3BgSrXZYBJxzXpzg.webp?scale-down-to=1024&width=5885&height=3928",
  "https://framerusercontent.com/images/EPqSQ0y1zQNrhoTUfrkBJmg0.webp?scale-down-to=1024&width=3944&height=3944",
  "https://framerusercontent.com/images/EzQC8z5dbkN6TK3r59c7DSzp98.webp?scale-down-to=1024&width=3584&height=5120",
  "https://framerusercontent.com/images/KLnmhaSIMUF6nrYBq4wQj79bXE.webp?scale-down-to=1024&width=7794&height=5199",
  "https://framerusercontent.com/images/XdepvkRBX5v3CzEZW8ZIwbXxMVU.png?scale-down-to=1024&width=800&height=1200",
  "https://framerusercontent.com/images/own3aYr1LQaL3EQhoVJYtK2iIgc.png?scale-down-to=1024&width=800&height=1200",
  "https://framerusercontent.com/images/uXzvdqHHGx2U2fcA4VIzTxIoIk.webp?scale-down-to=1024&width=800&height=1200",
  "https://framerusercontent.com/images/4BPYDvb6XwRHuZ4UUW8Sn5SVg.png?scale-down-to=1024&width=800&height=1200",
  "https://framerusercontent.com/images/dWAYDwgwFsSzZHEJUiCnNbZXGQ.webp?scale-down-to=2048&width=3300&height=2203",
  "https://framerusercontent.com/images/NGORKVsfXW88cpNLbvukYmso578.webp",
  "https://framerusercontent.com/images/xil7I6l5QGBFKgYQWzIcUX9pH8.webp",
  "https://framerusercontent.com/images/htLsDqSFx8sQMAa6AgjR3wgYPzo.png",
  "https://framerusercontent.com/images/LoMpwsqLjQidYSRrkIk2fVeNKPU.png",
  "https://framerusercontent.com/assets/YhkPO5oUUmi1qY5jnyw6b30zR8w.mp4",
  "https://framerusercontent.com/assets/DjMEst73Ra4nflzGVQyp6WuD1bU.woff2",
  "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2",
  "https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2",
  "https://fonts.gstatic.com/s/chivomono/v11/mFThWbgRxKvF_Z5eQMO9qRMrJJrnKNtC3D7hr6fQKphL03l4.woff2",
  "https://fonts.gstatic.com/s/chivomono/v11/mFThWbgRxKvF_Z5eQMO9qRMrJJrnKNtC3D4GqKfQKphL03l4.woff2",
  "https://fonts.gstatic.com/s/ibmplexmono/v20/-F6qfjptAgt5VM-kVkqdyU8n3twJ8lJPg-IUDNg.woff2"
];

await mkdir(outputPath, { recursive: true });

async function download(url) {
  const parsed = new URL(url);
  const filename = basename(parsed.pathname);
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0" },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(join(outputPath, filename), bytes);
  return { filename, bytes: bytes.length };
}

const queue = [...assets];
const completed = [];
const failures = [];

async function worker() {
  while (queue.length) {
    const url = queue.shift();
    try {
      completed.push(await download(url));
    } catch (error) {
      failures.push({ url, error: String(error) });
    }
  }
}

await Promise.all(Array.from({ length: 4 }, worker));

console.log(
  JSON.stringify(
    {
      downloaded: completed.length,
      totalBytes: completed.reduce((sum, asset) => sum + asset.bytes, 0),
      failures,
    },
    null,
    2,
  ),
);

if (failures.length) process.exitCode = 1;

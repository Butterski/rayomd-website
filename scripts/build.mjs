import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const output = path.join(root, "_site");
const siteUrl = (process.env.SITE_URL || "http://localhost:4173").replace(/\/$/, "");
const websiteRepoUrl = (
  process.env.WEBSITE_REPO_URL || "https://github.com/Butterski/rayomd"
).replace(/\/$/, "");

const publicEntries = [
  "index.html",
  "404.html",
  "api",
  "privacy",
  "assets",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "site.webmanifest",
  "LICENSE"
];

const textExtensions = new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".webmanifest"]);

async function replaceTokens(target) {
  const entries = await readdir(target, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      await replaceTokens(entryPath);
      return;
    }
    if (!textExtensions.has(path.extname(entry.name))) return;

    const original = await readFile(entryPath, "utf8");
    const updated = original
      .replaceAll("__SITE_URL__", siteUrl)
      .replaceAll("__WEBSITE_REPO_URL__", websiteRepoUrl);
    if (updated !== original) await writeFile(entryPath, updated, "utf8");
  }));
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const entry of publicEntries) {
  await cp(path.join(root, entry), path.join(output, entry), { recursive: true });
}

await writeFile(path.join(output, ".nojekyll"), "", "utf8");
await replaceTokens(output);

console.log(`Built RayoMD website for ${siteUrl}`);

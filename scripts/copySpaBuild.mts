import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const entryHtmlFiles = new Set(['index.html', 'index.mobile.html', 'index.auth.html']);

const targets = [
  { distDir: 'desktop', publicDir: 'public/_spa' },
  { distDir: 'mobile', publicDir: 'public/_spa' },
  { distDir: 'auth', publicDir: 'public/_spa-auth' },
] as const;

for (const { distDir, publicDir } of targets) {
  const spaDir = path.resolve(root, publicDir);
  mkdirSync(spaDir, { recursive: true });

  const distRoot = path.resolve(root, `dist/${distDir}`);
  if (!existsSync(distRoot)) continue;

  for (const entry of readdirSync(distRoot)) {
    if (entryHtmlFiles.has(entry)) continue;

    cpSync(path.resolve(distRoot, entry), path.resolve(spaDir, entry), { recursive: true });
    console.log(`Copied dist/${distDir}/${entry} -> ${publicDir}/${entry}`);
  }
}

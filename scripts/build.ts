import fs from 'node:fs/promises';
import path from 'node:path';
import JSON5 from 'json5';
import { getReadme, isJsonEqual } from '@gkd-kit/tools';
import { updateReadMeMd } from './updateReadMeMd';
import subscription from './check';

const pkg = JSON.parse(await fs.readFile('package.json', 'utf8'));
const outDir = pkg.gkd.outDir;
const subscriptionPath = path.join(outDir, pkg.gkd.file);
const versionPath = path.join(outDir, pkg.gkd.versionFile);
subscription.version = 1;
try {
  const previous = JSON5.parse(await fs.readFile(subscriptionPath, 'utf8'));
  subscription.version = previous.version;
  if (!isJsonEqual(subscription, previous)) subscription.version += 1;
} catch (error) {
  if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
}
await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, 'README.md'), getReadme(subscription));
await fs.writeFile(subscriptionPath, JSON5.stringify(subscription));
await fs.writeFile(
  versionPath,
  JSON5.stringify({ id: subscription.id, version: subscription.version }),
);
await updateReadMeMd(subscription);

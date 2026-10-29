import fs from 'node:fs/promises';
import type { RawSubscription } from '@gkd-kit/api';

export const updateReadMeMd = async (subscription: RawSubscription) => {
  const readmePath = 'README.md';
  const content = await fs.readFile(readmePath, 'utf8');
  const start = '<!-- subscription-stats:start -->';
  const end = '<!-- subscription-stats:end -->';
  const startIndex = content.indexOf(start);
  const endIndex = content.indexOf(end);
  if (startIndex === -1 || endIndex < startIndex) {
    throw new Error('README.md is missing subscription statistics markers');
  }
  const apps = subscription.apps ?? [];
  const groups = apps.reduce(
    (total, app) => total + (app.groups?.length ?? 0),
    0,
  );
  const stats = [
    '| 项目 | 数量 |',
    '| --- | --- |',
    `| 版本 | v${subscription.version} |`,
    `| 应用 | ${apps.length} |`,
    `| 应用规则组 | ${groups} |`,
    `| 全局规则组 | ${subscription.globalGroups?.length ?? 0} |`,
  ].join('\n');
  await fs.writeFile(
    readmePath,
    content.slice(0, startIndex + start.length) +
      '\n\n' +
      stats +
      '\n\n' +
      content.slice(endIndex),
  );
};

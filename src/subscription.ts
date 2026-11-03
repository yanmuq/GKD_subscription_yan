import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 同一用途可分属限时和持续类别，按用途前缀保留专用规则对全局规则的避让。
const globalAppGroupPrefixes: Record<number, string[]> = {
  0: ['限时-开屏广告', '持续-小程序开屏广告', '持续-全屏广告-开屏广告'],
  1: ['限时-应用提示-更新提示', '持续-更新提示'],
  2: ['限时-应用提示-青少年模式', '持续-应用提示弹窗-青少年模式'],
};

for (const app of apps) {
  for (const group of app.groups) {
    if (
      globalAppGroupPrefixes[0].some((prefix) => group.name.startsWith(prefix))
    ) {
      group.order = OPEN_AD_ORDER;
    }
  }
}

// disableIfAppGroupMatch 只支持一个前缀；将多个前缀命中的应用合入全局禁用名单。
for (const group of globalGroups) {
  const prefixes = globalAppGroupPrefixes[group.key];
  const excludedAppIds = new Set(
    apps
      .filter((app) =>
        app.groups.some(
          (appGroup) =>
            !appGroup.ignoreGlobalGroupMatch &&
            prefixes.some((prefix) => appGroup.name.startsWith(prefix)),
        ),
      )
      .map((app) => app.id),
  );
  const configuredAppIds = new Set(group.apps?.map((app) => app.id));
  group.apps = [
    ...(group.apps ?? []).map((app) =>
      excludedAppIds.has(app.id) ? { ...app, enable: false } : app,
    ),
    ...[...excludedAppIds]
      .filter((id) => !configuredAppIds.has(id))
      .map((id) => ({ id, enable: false })),
  ];
}

export default defineGkdSubscription({
  id: 666,
  name: '言木七的GKD订阅（AIsouler维护版）',
  version: 0,
  author: 'yanmuq / AIsouler及原贡献者',
  checkUpdateUrl: './AIsouler_gkd.version.json5',
  supportUri: 'https://github.com/yanmuq/GKD_subscription_yan/issues',
  categories,
  globalGroups,
  apps,
});

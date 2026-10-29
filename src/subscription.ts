import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups, { OPEN_AD_ORDER } from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (g.name.startsWith('开屏广告')) {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 666,
  name: '言木七的GKD订阅（AIsouler维护版）',
  version: 0,
  author: 'yanmuq / AIsouler及原贡献者',
  checkUpdateUrl: './AIsouler_gkd.version.json5',
  supportUri: 'https://github.com/yanmuq/GKD_subscription_yan/issues',
  categories,
  globalGroups,
  apps: rawApps,
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ataaw.tianyi',
  name: '天翼生活',
  groups: [
    {
      key: 2,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: ['[vid="version"]', '[vid="ignore"]'],
      snapshotUrls: 'https://i.gkd.li/i/13867468',
    },
  ],
});

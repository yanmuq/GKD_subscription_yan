import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaote',
  name: '小特',
  groups: [
    {
      key: 1,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[id="com.xiaote:id/ad_close"][text*="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14035706',
        },
      ],
    },
  ],
});

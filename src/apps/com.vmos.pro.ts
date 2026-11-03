import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vmos.pro',
  name: 'VMOS Pro',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.vmos.pro.activities.main.MainActivity',
          matches: '[text="不再显示本活动"]',
          snapshotUrls: 'https://i.gkd.li/i/13536416',
        },
      ],
    },
  ],
});

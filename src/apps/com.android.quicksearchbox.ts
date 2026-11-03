import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.quicksearchbox',
  name: '搜索',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.SearchActivityTransparent',
          matches: '[vid="ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13897834',
        },
      ],
    },
  ],
});

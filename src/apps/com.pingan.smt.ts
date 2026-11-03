import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.smt',
  name: 'i深圳',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      resetMatch: 'app',
      matchTime: 20000,
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          matchTime: 20000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.pingan.smt.MainActivity',
          matches: '[vid="close_view"]',
          exampleUrls: 'https://e.gkd.li/97a058cf-0564-4194-b527-b2ec40233204',
          snapshotUrls: 'https://i.gkd.li/i/17011387',
        },
      ],
    },
  ],
});

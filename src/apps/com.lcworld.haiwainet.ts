import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lcworld.haiwainet',
  name: '人民日报海外版',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.main.MainActivity',
          matches: '[vid="iv_paper_close"]',
          exampleUrls: 'https://e.gkd.li/021a457e-6c55-4ec6-b2f2-85b33a93c5b6',
          snapshotUrls: 'https://i.gkd.li/i/17089256',
        },
      ],
    },
  ],
});

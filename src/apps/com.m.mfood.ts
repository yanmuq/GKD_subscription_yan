import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.m.mfood',
  name: 'mFood',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-浮窗广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
          matches: '[id="com.m.mfood:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13350787',
        },
      ],
    },
  ],
});

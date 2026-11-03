import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eco.global.app',
  name: 'ECOVACS HOME',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: 'ImageView[id="com.eco.global.app:id/adview_jump"]',
          snapshotUrls: 'https://i.gkd.li/i/13538616',
        },
      ],
    },
  ],
});

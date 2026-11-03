import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rytong.hnair',
  name: '海南航空',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-首页弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.hnair.airlines.ui.main.MainActivity',
          matches: 'ImageView[id*="com.rytong.hnair:id/iv_cloes"]',
          snapshotUrls: 'https://i.gkd.li/i/12846381',
        },
      ],
    },
  ],
});

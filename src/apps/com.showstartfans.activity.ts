import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.showstartfans.activity',
  name: '秀动',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds:
            'com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity',
          matches: '[id="com.showstartfans.activity:id/img_close_coupon"]',
          snapshotUrls: 'https://i.gkd.li/i/13670432',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.activity.MainActivity',
          matches:
            '[id="com.redfinger.app:id/btn_update"] + [id="com.redfinger.app:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13761821',
        },
      ],
    },
    {
      key: 2,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.redfinger.app.activity.MainActivity',
          matches: '[id="com.redfinger.app:id/rl_screen_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13761825',
        },
      ],
    },
  ],
});

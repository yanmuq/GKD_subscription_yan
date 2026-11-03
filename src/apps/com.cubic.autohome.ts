import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cubic.autohome',
  name: '汽车之家',
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
          activityIds: 'com.cubic.autohome.MainActivity',
          matches: '[id="com.cubic.autohome:id/operate_show_exit_layout"]',
          snapshotUrls: 'https://i.gkd.li/i/12836324',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '领福利悬浮窗',
          fastQuery: true,
          activityIds: 'com.cubic.autohome.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] < * <2 * - [id="android:id/tabhost"]',
          snapshotUrls: 'https://i.gkd.li/i/13885414',
        },
        {
          key: 1,
          name: '直播悬浮窗',
          activityIds: 'com.cubic.autohome.MainActivity',
          matches:
            '[id="com.autohome.main.car:id/image_live_close" || id="com.autohome.main.car:id/view_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/24221462',
        },
      ],
    },
  ],
});

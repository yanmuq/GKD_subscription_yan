import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdlite',
  name: '京喜特价',
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
          activityIds: 'com.jd.jdlite.MainFrameActivity',
          matches: '@[desc="关闭页面"] - FrameLayout >n [text="极速版弹窗"]',
          snapshotUrls: 'https://i.gkd.li/i/12727396',
        },
      ],
    },
    {
      key: 10,
      name: '限时-应用提示-通知权限',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainFrameActivity',
          matches:
            '@ImageView[clickable=true] - LinearLayout > [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13062969',
        },
      ],
    },
  ],
});

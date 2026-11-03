import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moutai.mall',
  name: 'i茅台',
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
          activityIds: [
            'com.moutai.mall.MainActivity',
            'com.moutai.mall.module.splash.SplashActivity',
          ],
          matches:
            '[id="com.moutai.mall:id/ivPic"] + ViewGroup + [id="com.moutai.mall:id/vClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12745130',
            'https://i.gkd.li/i/12745153',
          ],
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
          activityIds: '.MainActivity',
          matches:
            '@[id="com.moutai.mall:id/vClose"] - LinearLayout > [text*="开通消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/12745142',
        },
      ],
    },
  ],
});

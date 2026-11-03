import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.vmall',
  name: '荣耀商城',
  groups: [
    {
      key: 1,
      name: '持续-全屏广告-应用内弹窗广告',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.vmall.client.base.fragment.VmallWapActivity',
            'com.vmall.client.splash.fragment.SplashActivity',
          ],
          matches: '[id="com.hihonor.vmall:id/gift_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/13060881',
        },
      ],
    },
    {
      key: 2,
      name: '持续-应用提示弹窗-通知权限',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.vmall.client.messageCenter.fragment.MessageCenterActivity',
            'com.vmall.client.base.fragment.VmallWapActivity',
          ],
          matches: [
            '[text="开启消息通知"]',
            '[vid="notification_close" || vid="iv_close"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13959029',
            'https://i.gkd.li/i/16776398',
          ],
        },
      ],
    },
  ],
});

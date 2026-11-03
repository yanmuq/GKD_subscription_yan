import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.m4399.gamecenter',
  name: '4399游戏盒',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          name: '首页右侧悬浮广告',
          fastQuery: true,
          activityIds:
            'com.m4399.gamecenter.plugin.main.controllers.ApplicationActivity',
          matches:
            '@[id="com.m4399.gamecenter:id/close"] + [id="com.m4399.gamecenter:id/image"]',
          snapshotUrls: 'https://i.gkd.li/i/13297466',
        },
      ],
    },
    {
      key: 2,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          matches:
            '[id="com.m4399.gamecenter:id/image"] + [id="com.m4399.gamecenter:id/close"]',
          exampleUrls: 'https://e.gkd.li/28dafb84-2474-4a09-9885-9810089bad00',
          snapshotUrls: 'https://i.gkd.li/i/13297551',
        },
      ],
    },
  ],
});

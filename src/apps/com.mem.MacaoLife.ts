import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mem.MacaoLife',
  name: '澳覓',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mem.life.ui.launch.LaunchActivity',
          matches: '[id="com.mem.MacaoLife:id/cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/13350665',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-浮窗广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.mem.life.ui.home.HomeActivity',
          matches: '[id="com.mem.MacaoLife:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13350685',
        },
      ],
    },
  ],
});

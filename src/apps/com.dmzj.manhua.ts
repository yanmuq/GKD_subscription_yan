import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dmzj.manhua',
  name: '动漫之家',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dmzj.manhua.ui.LaunchInterceptorActivity',
          matches: '[id="com.dmzj.manhua:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13542503',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.dmzj.manhua.ui.home.HomeTabsActivitys',
          matches: '[id="com.dmzj.manhua:id/ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13542506',
        },
      ],
    },
  ],
});

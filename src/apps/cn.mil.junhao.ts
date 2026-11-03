import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.mil.junhao',
  name: '中国军号',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="splash_adv_ship"]',
          snapshotUrls: 'https://i.gkd.li/i/13806892',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-右侧悬浮窗',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 [vid="float_feedback"]',
          snapshotUrls: 'https://i.gkd.li/i/13806896',
        },
        {
          key: 1,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 FrameLayout <2 [vid="fragment_containerx"]',
          snapshotUrls: 'https://i.gkd.li/i/13806894',
        },
      ],
    },
  ],
});

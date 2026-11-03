import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '动态页面-卡片广告',
          fastQuery: true,
          activityIds: 'com.tencent.karaoke.module.main.ui.MainTabActivity',
          matches: '@ImageView[clickable=true] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13334798',
        },
      ],
    },
    {
      key: 2,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      rules: [
        {
          key: 1,
          name: '活动弹窗',
          activityIds:
            'com.tencent.karaoke.module.splash.ui.SplashBaseActivity',
          matches:
            'ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*="双十一"]',
          snapshotUrls: 'https://i.gkd.li/i/13363281',
        },
      ],
    },
  ],
});

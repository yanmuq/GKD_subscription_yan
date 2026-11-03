import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jianshu.haruki',
  name: '简书',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-VIP弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baiji.jianshu.ui.splash.SplashScreenActivity',
          matches: '[id="com.jianshu.haruki:id/dialog_lucky_prize_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13327286',
        },
      ],
    },
    {
      key: 2,
      name: '持续-更新提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jianshu.wireless.articleV2.X5ArticleDetailActivity',
      rules: [
        {
          key: 0,
          matches: '@[checked=false] + [text="忽略此版本"]',
          exampleUrls: 'https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316',
          snapshotUrls: 'https://i.gkd.li/i/15989275',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="取消"]',
          exampleUrls: 'https://e.gkd.li/23662d6a-1858-4d97-9bc7-ef03ede9f316',
          snapshotUrls: 'https://i.gkd.li/i/15989275',
        },
      ],
    },
    {
      key: 3,
      name: '持续-页面内广告-首页信息流广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baiji.jianshu.MainActivity',
          matches: 'ImageView[vid="nativeAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/16201541',
        },
      ],
    },
  ],
});

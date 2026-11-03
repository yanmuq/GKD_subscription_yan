import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yikaobang.yixue',
  name: '医考帮',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-会员活动弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.psychiatrygarden.activity.HomePageNewActivity',
          matches: '@ImageView[id="com.yikaobang.yixue:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13425853',
        },
      ],
    },
  ],
});

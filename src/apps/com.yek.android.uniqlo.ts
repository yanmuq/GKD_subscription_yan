import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yek.android.uniqlo',
  name: '优衣库',
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
          activityIds: 'com.yek.android.uniqlo.uiux.Home.activity.HomeActivity',
          matches: 'ImageView[id="com.yek.android.uniqlo:id/pop_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13212320',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击取消',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.WelcomeActivity',
          matches: '@TextView[text="取消"] + TextView[text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/13446421',
        },
      ],
    },
  ],
});

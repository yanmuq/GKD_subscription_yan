import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.overlook.android.fing',
  name: 'Fing',
  groups: [
    {
      key: 0,
      name: '限时-应用提示-教程弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.main.SplashActivity',
          matches: '[text="關閉"]',
          snapshotUrls: 'https://i.gkd.li/i/15521827',
        },
      ],
    },
  ],
});

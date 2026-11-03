import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingye.app',
  name: '星野',
  groups: [
    {
      key: 2,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.weaver.app.MainSplashActivity',
          matches: '[vid="settingUpdateCancelTv"]',
          snapshotUrls: 'https://i.gkd.li/i/14137987',
        },
      ],
    },
  ],
});

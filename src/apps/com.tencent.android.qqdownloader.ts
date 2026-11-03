import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.android.qqdownloader',
  name: '应用宝',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-关闭登录弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tencent.assistantv2.activity.MainActivity',
          matches: '@Button[clickable=true] - [text="欢迎登录应用宝"]',
          exampleUrls:
            'https://m.gkd.li/57941037/29c109c2-7993-4b39-ba80-6ae6451ab533',
          snapshotUrls: 'https://i.gkd.li/i/16012576',
        },
      ],
    },
  ],
});

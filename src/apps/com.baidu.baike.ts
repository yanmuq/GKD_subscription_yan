import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.baike',
  name: '百度百科',
  groups: [
    {
      key: 10,
      name: '限时-应用提示-通知权限',
      enable: false,
      desc: '自动点击"不允许"',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.component.push.NotificationEnableDialog',
          matches: '[text^="打开推送通知"] +2 [text="不允许"]',
          snapshotUrls: 'https://i.gkd.li/i/12755717',
        },
      ],
    },
  ],
});

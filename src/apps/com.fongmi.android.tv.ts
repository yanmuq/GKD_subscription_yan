import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fongmi.android.tv',
  name: '影视',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.activity.MainActivity',
          matches:
            '[id="com.fongmi.android.tv:id/buttonPanel"] >2 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/14035154',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus.canary',
  name: 'MT管理器Pro',
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
          activityIds: 'bin.mt.plus.Main',
          matches: '@[text="取消"] + [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13561226',
        },
      ],
    },
  ],
});

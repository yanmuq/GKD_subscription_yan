import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bin.mt.plus',
  name: 'MT管理器',
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
          activityIds: '.Main',
          matches: ['[text="更新"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/16050794',
        },
      ],
    },
  ],
});

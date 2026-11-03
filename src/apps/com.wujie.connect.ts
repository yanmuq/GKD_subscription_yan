import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wujie.connect',
  name: '无界趣连',
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
          matches: '[vid="no_update_tv"]',
          snapshotUrls: 'https://i.gkd.li/i/14296122',
        },
      ],
    },
  ],
});

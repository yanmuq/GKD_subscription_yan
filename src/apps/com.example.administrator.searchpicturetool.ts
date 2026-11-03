import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.administrator.searchpicturetool',
  name: '搜图神器',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击取消',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[text="取消"] + [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13989147',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.example.servyouappzhuhai',
  name: '广东税务',
  groups: [
    {
      key: 0,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity',
          matches: '[id="com.example.servyouappzhuhai:id/btn_dialog_negtive"]',
          snapshotUrls: 'https://i.gkd.li/i/13440721',
        },
      ],
    },
  ],
});

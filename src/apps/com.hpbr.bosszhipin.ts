import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hpbr.bosszhipin',
  name: 'BOSS直聘',
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
          activityIds: [
            '.module.main.activity.MainActivity',
            '.module.launcher.WelcomeActivity',
          ],
          matches: '@ImageView[id="com.hpbr.bosszhipin:id/iv_cancle"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13440781',
            'https://i.gkd.li/i/13623476',
          ],
        },
      ],
    },
  ],
});

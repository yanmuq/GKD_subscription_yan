import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.chunyu.ChunyuDoctor',
  name: '春雨医生',
  groups: [
    {
      key: 10,
      name: '限时-应用提示-应用评分弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.Activities.MainActivity',
            '.Activities.WelcomeActivity',
          ],
          matches:
            '[text="给应用评分"] +(2) RelativeLayout > [text="下次再说"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12661907',
            'https://i.gkd.li/i/12661924',
          ],
        },
      ],
    },
  ],
});

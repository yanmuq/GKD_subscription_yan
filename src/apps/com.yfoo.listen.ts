import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yfoo.listen',
  name: '聆听音乐',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.yfoo.listenx.activity.HomeActivity',
          matches: '@[text="取消"] < * > [text="下载"]',
          snapshotUrls: 'https://i.gkd.li/i/15856014',
        },
      ],
    },
  ],
});

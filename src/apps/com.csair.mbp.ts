import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.csair.mbp',
  name: '南方航空',
  groups: [
    {
      key: 3,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.CSMBPActivity',
          matches: '[id="com.csair.mbp:id/close_btn"]',
          exampleUrls: 'https://e.gkd.li/c6aeaf1c-e4d6-4b9c-a4bf-ee5b05d2bb30',
          snapshotUrls: 'https://i.gkd.li/i/13197497',
        },
      ],
    },
    {
      key: 4,
      name: '限时-应用提示-长辈版弹窗',
      enable: false,
      desc: '点击[暂不开启]',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.csair.mbp.CSMBPActivity',
          matches: '[text="开启长辈版"] -2 [text="暂不开启"]',
          exampleUrls:
            'https://m.gkd.li/57941037/8744f8c6-7f9a-4f7b-a5c7-68de1701cd7b',
          snapshotUrls: 'https://i.gkd.li/i/14810700',
        },
      ],
    },
  ],
});

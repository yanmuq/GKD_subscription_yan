import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.x.istar',
  name: '观星',
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
          fastQuery: true,
          activityIds: 'com.x.istar.view.main.MainActivity',
          matches: '[text="关闭广告"][vid="btn_negative"]',
          snapshotUrls: 'https://i.gkd.li/i/13974606',
        },
      ],
    },
  ],
});

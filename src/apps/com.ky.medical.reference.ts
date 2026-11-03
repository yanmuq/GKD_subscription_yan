import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: -1,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[id="com.ky.medical.reference:id/btn_go"][text^="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/12918049',
    },
    {
      key: 0,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ky.medical.reference.promotion.AdDialogActivity',
          matches: '[id="com.ky.medical.reference:id/icClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12840924',
        },
      ],
    },
  ],
});

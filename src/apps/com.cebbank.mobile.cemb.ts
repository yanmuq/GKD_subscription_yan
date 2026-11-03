import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: -1,
      name: '限时-开屏广告',
      enable: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_skip"]',
          exampleUrls: 'https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d',
          snapshotUrls: 'https://i.gkd.li/i/17615867',
        },
      ],
    },
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
          activityIds: '.view.CustomizedDialog',
          matches: '@[text="不再提示"] +2 [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12727241',
        },
      ],
    },
    {
      key: 2,
      name: '限时-全屏广告-首页弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
            'com.cebbank.mobile.cemb.ui.activity.HomeActivity',
          ],
          matches:
            '[id="com.cebbank.mobile.cemb:id/home_advertising_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12727248',
            'https://i.gkd.li/i/13471080',
          ],
        },
      ],
    },
  ],
});

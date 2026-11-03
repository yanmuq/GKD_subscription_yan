import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hihonor.phoneservice.main.MainActivity',
          matches: '[vid="ads_cancel"]',
          exampleUrls: 'https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89',
          snapshotUrls: 'https://i.gkd.li/i/16476928',
        },
      ],
    },
    {
      key: 10,
      name: '持续-应用提示弹窗-定位权限',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.hihonor.phoneservice.main.MainActivity',
          matches:
            '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12783134',
        },
      ],
    },
  ],
});

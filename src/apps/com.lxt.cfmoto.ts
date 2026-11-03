import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lxt.cfmoto',
  name: 'CFMOTO',
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
          key: 1,
          name: '首页弹窗广告',
          fastQuery: true,
          activityIds: 'com.cfmoto.oilmoto.ui.MainCfActivity',
          matches: '[id="com.lxt.cfmoto:id/closeClick"]',
          snapshotUrls: 'https://i.gkd.li/i/13401967',
        },
      ],
    },
  ],
});

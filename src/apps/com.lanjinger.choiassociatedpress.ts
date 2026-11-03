import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-首页弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.lanjinger.choiassociatedpress.main.OperateActivity',
          matches: '@ImageView[id$="iv_back"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13749206',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jisu.manhua',
  name: '漫画人极速版',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.ilike.cartoon.activities.HomeActivity',
          matches:
            '[id="com.jisu.manhua:id/iv_promotion"] + [id="com.jisu.manhua:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13688186',
        },
      ],
    },
  ],
});

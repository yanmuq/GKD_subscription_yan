import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmi.jegotrip',
  name: '无忧行',
  groups: [
    {
      key: 2,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.ui.BottomTabsActivity',
          matches: '[id="com.cmi.jegotrip:id/ig_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13631904',
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-定位权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.cmi.jegotrip.ui.BottomTabsActivity',
          matches: [
            '[text="申请定位权限说明"]',
            '[id="com.cmi.jegotrip:id/btn_cancel"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13232766',
        },
      ],
    },
    {
      key: 4,
      name: '持续-应用提示弹窗-权限申请弹窗',
      enable: false,
      desc: '点击[取消]',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'pub.devrel.easypermissions.AppSettingsDialogHolderActivity',
          matches: ['[text="权限申请"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/16233246',
        },
      ],
    },
  ],
});

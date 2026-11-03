import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="tv_operation_skip"]',
          exampleUrls: 'https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6',
          snapshotUrls: 'https://i.gkd.li/i/16406381',
        },
      ],
    },
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
          activityIds: [
            'com.hihonor.android.launcher.unihome.UniHomeLauncher',
            'com.hihonor.appmarket.module.main.MainActivity',
          ],
          matches: '[id="com.hihonor.appmarket:id/iv_dialog_operation_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063815',
            'https://i.gkd.li/i/13168440',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-悬浮窗小广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: '[id="com.hihonor.appmarket:id/iv_floating_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063928',
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-通知权限',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          activityIds: '.module.main.MainActivity',
          matches:
            'TextView[text="接收通知"] < LinearLayout < LinearLayout +n [id="android:id/buttonPanel"] Button[text="否"]',
          snapshotUrls: 'https://i.gkd.li/i/13073319',
        },
      ],
    },
    {
      key: 4,
      name: '限时-应用提示-个性化内容推荐提示',
      enable: false,
      desc: '点击取消',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.module.main.MainActivity',
          matches: [
            '[text*="个性化的内容推荐"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/12825cd1-cd11-40eb-80e3-45d93c9ad058',
          snapshotUrls: 'https://i.gkd.li/i/21884571',
        },
      ],
    },
  ],
});

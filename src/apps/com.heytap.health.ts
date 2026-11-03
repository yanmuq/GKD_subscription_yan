import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.health',
  name: 'OPPO 健康',
  groups: [
    {
      key: 1,
      name: '持续-更新提示',
      enable: false,
      desc: '点击[以后再说]',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.settings.me.upgrade.UpgradeActivity',
          matches: [
            '[text="检测到新版本"][visibleToUser=true]',
            '[text="以后再说"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22657352',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.main.MainActivity',
          matches:
            '[vid="adapter_act_root_view"] > [vid="close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22657359',
        },
      ],
    },
    {
      key: 3,
      name: '持续-应用提示弹窗-健康周报',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: ['[text="您的健康周报已生成"]', '[text="关闭"]'],
          snapshotUrls: 'https://i.gkd.li/i/22724032',
        },
      ],
    },
    {
      key: 4,
      name: '持续-全屏广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="image_operation"] + [vid="close"]',
          snapshotUrls: 'https://i.gkd.li/i/22724039',
        },
      ],
    },
    {
      key: 5,
      name: '持续-应用提示弹窗-忽略[开启微信运动同步]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.heytap.health.main.MainActivity',
          matches: '[text^="开启微信运动同步"] + [text="忽略"]',
          exampleUrls: 'https://e.gkd.li/867170d7-5c10-48fc-8bda-9139235ef718',
          snapshotUrls: 'https://i.gkd.li/i/23087769',
        },
      ],
    },
    {
      key: 6,
      name: '持续-应用提示弹窗-应用使用情况',
      enable: false,
      desc: '点击[暂不]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.sleep.SleepHistoryActivity',
          matches: [
            '[text^="授权“OPPO 健康”应用访问应用使用情况"]',
            '[text="暂不"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23146074',
        },
      ],
    },
  ],
});

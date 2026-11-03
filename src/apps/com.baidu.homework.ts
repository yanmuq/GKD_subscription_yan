import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.homework',
  name: '作业帮',
  groups: [
    {
      key: 1,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.baidu.homework.activity.index.IndexActivity',
          matches: '[vid="ad_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15374440',
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: '.activity.index.IndexActivity',
          matches: ['[text^="小组件"]', '[text="以后再说"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/23567064',
        },
      ],
    },
  ],
});

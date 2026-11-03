import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.aliyun',
  name: '阿里云',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-通知权限',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.biz.home.mine.activity.KFeeCenterActivity',
          matches: '[text^="打开手机消息通知"] + * >2 [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/13446162',
        },
      ],
    },
  ],
});

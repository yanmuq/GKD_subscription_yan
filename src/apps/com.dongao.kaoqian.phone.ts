import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dongao.kaoqian.phone',
  name: '会计云课堂',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_welcome_guide"]',
          snapshotUrls: 'https://i.gkd.li/i/14809185',
        },
      ],
    },
  ],
});

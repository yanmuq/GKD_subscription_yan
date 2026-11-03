import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.doudoubird.weather',
  name: '最准天气',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="ad_view"] + [vid="delete_icon"]',
          exampleUrls: 'https://e.gkd.li/2a61d3de-6117-4d85-8f4d-565f6ee00a57',
          snapshotUrls: 'https://i.gkd.li/i/17358146',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youdao.note',
  name: '有道云笔记',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      rules: [
        {
          key: 1,
          name: '首页上方卡片广告',
          fastQuery: true,
          activityIds: 'com.youdao.note.activity2.MainActivity',
          matches:
            '[id="com.youdao.note:id/recycle_view"] + [id="com.youdao.note:id/close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13379524',
        },
      ],
    },
  ],
});

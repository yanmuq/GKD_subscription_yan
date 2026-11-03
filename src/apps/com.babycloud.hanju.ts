import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 2,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
            'com.babycloud.hanju.ui.activity.HanjuHomeActivity',
            'com.babycloud.hanju.search.activity.SearchActivity',
          ],
          matches: '[vid="unified_ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13628282',
            'https://i.gkd.li/i/13670721',
            'https://i.gkd.li/i/13849929',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '持续-全屏广告-视频播放时的弹窗广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: 'com.babycloud.hanju.ui.activity.HanjuSeriesActivity',
          matches:
            '[vid="close_rl" || vid="only_skip_rl" || vid="skip_rl"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13800123',
            'https://i.gkd.li/i/13972345',
            'https://i.gkd.li/i/14048532',
            'https://i.gkd.li/i/14048302',
          ],
        },
      ],
    },
  ],
});

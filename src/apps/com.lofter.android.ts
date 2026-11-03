import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.lofter.android.global.home.TabHomeActivity',
          matches:
            '[vid="global_ad_layout"] > [vid="close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/0559eada-7899-4c8a-8634-ef3f55227492',
          snapshotUrls: 'https://i.gkd.li/i/16494241',
        },
      ],
    },
  ],
});

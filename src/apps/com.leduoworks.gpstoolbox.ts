import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.leduoworks.gpstoolbox',
  name: 'GPS工具箱',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-首页占位广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.leduoworks.gpstoolbox.frmt.MainFrmtActivity',
          matches: '[id="com.leduoworks.gpstoolbox:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13062612',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.gamecenter',
  name: '小米游戏中心',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-首页右侧悬浮广告',
      enable: false,
      rules: [
        {
          activityIds: 'com.xiaomi.gamecenter.ui.MainTabActivity',
          matches:
            '[id="com.xiaomi.gamecenter:id/ad_view"] + [id="com.xiaomi.gamecenter:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12715800',
        },
      ],
    },
  ],
});

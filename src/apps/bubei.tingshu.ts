import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          fastQuery: true,
          activityIds:
            'bubei.tingshu.listen.book.detail.activity.DetailActivity',
          matches: '[id="bubei.tingshu:id/closeIcon"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13348489',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.home.ui.HomeActivity',
          matches: '[text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13545953',
        },
      ],
    },
  ],
});

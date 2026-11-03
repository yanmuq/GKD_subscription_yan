import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.oppo.store',
  name: 'OPPO商城',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击下次再说',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.MainActivity',
          matches: '@[text="下次再说"] -3 [text="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13295202',
        },
      ],
    },
    {
      key: 2,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.oppo.store.MainActivity',
          matches:
            'ImageView[id="com.oppo.store:id/dialog_delete"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/13295201',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qcymall.earphonesetup',
  name: 'QCY',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-我的-卡片广告',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.qcymall.earphonesetup.v2ui.activity.V2MainActivity',
          matches: '[vid="close_img_banner"]',
          snapshotUrls: 'https://i.gkd.li/i/13874219',
        },
      ],
    },
  ],
});

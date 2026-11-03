import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xmcy.hykb',
  name: '好游快爆',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.app.dialog.UpdateDialog',
          matches:
            '@[id="com.xmcy.hykb:id/iv_inner_button_close"] - RelativeLayout >n [id="com.xmcy.hykb:id/text_update_tip"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12870604',
            'https://i.gkd.li/i/13297450',
          ],
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
          activityIds: 'com.xmcy.hykb.app.ui.main.MainActivity',
          matches: '[id="com.xmcy.hykb:id/dialog_home_notice_image_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13259427',
        },
      ],
    },
  ],
});

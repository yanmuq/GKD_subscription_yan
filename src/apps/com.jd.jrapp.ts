import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-通知权限',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.bm.mainbox.main.MainActivity',
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13249998',
        },
        {
          key: 1,
          activityIds: '.bm.common.web.ui.WebActivity',
          matches:
            '@View - * > [visibleToUser=true][text="开启并订阅通知"] <<n [id="com.jd.jrapp:id/webview"]',
          snapshotUrls: 'https://i.gkd.li/i/13255656',
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
          activityIds: '.bm.mainbox.main.MainActivity',
          matches:
            '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/13628364',
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-满意度打分弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.dy.api.JRDynamicPickerActivity',
          matches: '@ImageView[clickable=true] - [text$="满意度打几分？"]',
          snapshotUrls: 'https://i.gkd.li/i/13804561',
        },
      ],
    },
  ],
});

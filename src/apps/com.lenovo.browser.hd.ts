import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lenovo.browser.hd',
  name: '联想浏览器HD',
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
          activityIds: 'com.zui.launcher.drawer.NormalLauncher',
          matches:
            '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13401982',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zui.launcher.drawer.NormalLauncher',
          matches:
            '[text="开启消息通知"] +n * > [id="com.lenovo.browser.hd:id/tv_cancle"]',
          snapshotUrls: 'https://i.gkd.li/i/13401980',
        },
      ],
    },
  ],
});

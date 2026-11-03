import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chaozh.iReader',
  name: 'VIVO 电子书',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-权限提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT',
          matches: 'Button[text="前往开启"] - Button[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/i/13627649',
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
          activityIds: 'com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf',
          matches: '@ImageView[clickable=true] + TextView[text="开启推送通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13837961',
        },
      ],
    },
  ],
});

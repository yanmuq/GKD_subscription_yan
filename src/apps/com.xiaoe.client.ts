import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaoe.client',
  name: '小鹅通',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示-版本更新弹窗',
      enable: false,
      desc: '点击暂不更新',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaoe.app.ui.main.XiaoeMainActivity',
          matches: 'FrameLayout[vid="centerPopupContainer"] [text="暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/i/13832282',
        },
      ],
    },
  ],
});

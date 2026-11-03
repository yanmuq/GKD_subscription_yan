import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.uzero.baimiao',
  name: '白描',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-自动点击截取全屏',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.screen.ScreenCaptureActivity',
          matches: '[text="截取全屏"]',
          snapshotUrls: 'https://i.gkd.li/i/23054772',
        },
      ],
    },
  ],
});

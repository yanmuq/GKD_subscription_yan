import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.mimobile',
  name: '小米移动',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-评价提示',
      enable: false,
      rules: [
        {
          activityIds: '.activity.XiaomiMobileMainActivity',
          matches: '@ImageView[desc=null] < [desc="「小米移动」使用体验调查"]',
          snapshotUrls: 'https://i.gkd.li/i/23227230',
        },
      ],
    },
  ],
});

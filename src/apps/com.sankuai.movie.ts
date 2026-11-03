import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-开启通知弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - * > [text="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/18455375',
        },
      ],
    },
  ],
});

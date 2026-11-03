import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.openai.chatgpt',
  name: 'ChatGPT',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-套餐限额提示',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: '.MainActivity',
          matches:
            '[text*="套餐限额"] + @View[clickable=true] > [desc="关闭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/24996012',
        },
      ],
    },
  ],
});

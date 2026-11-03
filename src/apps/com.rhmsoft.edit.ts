import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.rhmsoft.edit',
  name: 'QuickEdit',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-自动点击完成',
      enable: false,
      desc: '保存成功后点击完成',
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.MainActivity',
          matches: '@[text="完成"][clickable=true] - * > [text^="保存成功"]',
          snapshotUrls: 'https://i.gkd.li/i/24842648',
        },
      ],
    },
  ],
});

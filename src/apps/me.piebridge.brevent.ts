import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-权限不足弹窗',
      enable: false,
      desc: '点击取消',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'me.piebridge.brevent.ui.BreventActivity',
          matches: ['[text^="黑阈服务权限不足"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13218439',
        },
      ],
    },
  ],
});

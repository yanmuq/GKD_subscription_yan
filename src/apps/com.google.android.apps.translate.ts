import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.translate',
  name: 'Google翻译',
  groups: [
    {
      key: 4,
      name: '限时-应用提示-关闭登录备份翻译记录弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.google.android.apps.translate.TranslateActivity',
          matches: ['[text="备份您的翻译历史记录"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/13495796',
        },
      ],
    },
  ],
});

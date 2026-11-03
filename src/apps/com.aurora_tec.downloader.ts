import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.aurora_tec.downloader',
  name: '极光下载器',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-系统公告',
      enable: false,
      desc: '点击[确定]',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.HomeActivity',
          matches: '[text="系统公告"] +2 [text="确定"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/45886cda-e54a-4a1f-b136-949b59704f0c',
          snapshotUrls: 'https://i.gkd.li/i/24726084',
        },
      ],
    },
  ],
});

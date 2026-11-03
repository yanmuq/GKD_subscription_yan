import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sjm.zhuanzhuan.mcy',
  name: '喵次元',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          action: 'back',
          matches: '[text="立即升级"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13392514',
        },
      ],
    },
  ],
});

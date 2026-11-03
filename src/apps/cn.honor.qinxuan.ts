import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.honor.qinxuan',
  name: '荣耀亲选',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-首页弹窗广告',
      enable: false,
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'cn.honor.qinxuan.MainActivity',
          matches: '[id="cn.honor.qinxuan:id/iv_close_dlg"]',
          snapshotUrls: 'https://i.gkd.li/i/13930613',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[vid="iv_close"] < * > [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/14946137',
        },
      ],
    },
  ],
});

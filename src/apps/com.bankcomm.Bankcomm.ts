import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 0,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[vid="popup_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15046998',
        },
      ],
    },
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击 暂不更新',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '[id = "com.bankcomm.Bankcomm:id/tvNotNow" && text = "暂不更新"]',
          snapshotUrls: 'https://i.gkd.li/i/12842484',
        },
      ],
    },
    {
      key: 2,
      name: '限时-应用提示-网络代理提示弹窗',
      enable: false,
      desc: '点击[继续使用]',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
          matches: '[text="继续使用"]',
          exampleUrls: 'https://e.gkd.li/b9854883-ed3c-4a55-bd8e-7af7c02d59ba',
          snapshotUrls: 'https://i.gkd.li/i/17556284',
        },
      ],
    },
  ],
});

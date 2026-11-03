import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
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
          matches: '[text="去开启"] + [id="com.hupu.shihuo:id/ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13704887',
        },
      ],
    },
    {
      key: 3,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
          matches:
            '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13115664',
        },
      ],
    },
    {
      key: 4,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击[以后再说]',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.shizhi.shihuoapp.module.main.ui.main.MainActivity',
          matches: '[text="发现新版本"] +2 ViewGroup > [text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/14052208',
        },
      ],
    },
  ],
});

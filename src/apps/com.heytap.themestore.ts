import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.themestore',
  name: '主题商店',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.nearme.themespace.activities.ThemeMainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true][childCount=0][width<120 && height<120] <2 RelativeLayout[childCount=2] < ViewGroup[childCount=1] < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/4e97c4fa-6d59-4073-8dd1-fc2deb531a41',
          snapshotUrls: 'https://i.gkd.li/i/21327613',
        },
      ],
    },
  ],
});

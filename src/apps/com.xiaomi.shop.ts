import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.shop',
  name: '小米商城',
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
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.xiaomi.shop2.activity.MainActivity',
            'com.xiaomi.shop.plugin.homepage.utils.AdDialog',
          ],
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id="android:id/content"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12649330',
            'https://i.gkd.li/i/14393039',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22550140',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xiaomi.shop2.activity.MainActivity',
          matches:
            '[id="com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15528092',
        },
      ],
    },
    {
      key: 3,
      name: '持续-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          position: {
            left: 'width * 0.3509',
            top: 'width * 1.4046',
          },
          activityIds: '.lib.ForceUpdateActivity',
          matches:
            '@LinearLayout[childCount=0] < [id="android:id/content"][childCount=1] < [vid="action_bar_root"]',
          snapshotUrls: 'https://i.gkd.li/i/19547338',
        },
      ],
    },
    {
      key: 4,
      name: '持续-应用提示弹窗-客服',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xiaomi.miot.store.mirn.RNMainActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] - [text^="请对"][text$="进行评价"]',
          snapshotUrls: 'https://i.gkd.li/i/23206873',
        },
      ],
    },
  ],
});

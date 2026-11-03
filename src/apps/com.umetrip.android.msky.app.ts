import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.umetrip.android.msky.app',
  name: '航旅纵横',
  groups: [
    {
      key: 10,
      name: '持续-应用提示弹窗-进入飞行模式-提示弹窗',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches:
            '[id="com.umetrip.android.msky.app:id/imageView"] + [id="com.umetrip.android.msky.app:id/iv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12750185',
        },
      ],
    },
    {
      key: 11,
      name: '持续-页面内广告-首页右侧悬浮广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.umetrip.android.msky.homepage.activity.UmeHomeActivity',
          matches:
            '@[id="com.umetrip.android.msky.app:id/iv_close_envelope"] + [id="com.umetrip.android.msky.app:id/media_view_envelope"]',
          snapshotUrls: 'https://i.gkd.li/i/12783264',
        },
      ],
    },
    {
      key: 12,
      name: '限时-全屏广告',
      resetMatch: 'app',
      matchTime: 20000,
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchTime: 20000,
          actionMaximum: 1,
          resetMatch: 'app',
          matches:
            '@ImageView[clickable=true][childCount=0][visibleToUser=true][width=height] < FrameLayout <2 FrameLayout <3 FrameLayout < [vid="operation_dialog_weex_view"]',
          snapshotUrls: 'https://i.gkd.li/i/24706615',
        },
      ],
    },
  ],
});

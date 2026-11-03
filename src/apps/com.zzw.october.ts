import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 2,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      rules: [
        {
          key: 1,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.MainActivity',
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12842675',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[vid="ad_close"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/2033b8e2-8234-486d-ba8a-e7d140215d88',
          snapshotUrls: 'https://i.gkd.li/i/18235996',
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/23003165',
        },
        {
          // 点击广告进入的详情页
          key: 4,
          fastQuery: true,
          activityIds: 'com.beizi.ad.AdActivity',
          matches: '[vid="close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/23002976',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.octopus.ad.AdActivity',
          matches:
            '@ImageView[clickable=true][width<90 && height<90] - [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/23021515',
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-更新提示',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: ['.MainActivity', '.LaunchActivity'],
          anyMatches: [
            '[vid="dialog_de"][visibleToUser=true]',
            '[text="以后再说"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/f80b0ecb-a704-495d-9afc-c1ffcba2108f',
          snapshotUrls: [
            'https://i.gkd.li/i/19485921',
            'https://i.gkd.li/i/19535009',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '限时-应用提示-志愿者保险提示弹窗',
      enable: false,
      desc: '点击[暂不领取]',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches: '[text="暂不领取"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/fe4b163a-bb6c-4337-b095-4bdf1219e9b2',
          snapshotUrls: 'https://i.gkd.li/i/19485920',
        },
      ],
    },
    {
      key: 5,
      name: '持续-页面内广告-浮标广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zzw.october.MainActivity',
          matches: '[vid="channel_banner_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/23003170',
        },
      ],
    },
  ],
});

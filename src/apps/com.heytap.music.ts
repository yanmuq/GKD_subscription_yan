import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.heytap.music',
  name: '音乐',
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
          activityIds: 'com.allsaints.music.MainActivity',
          matches: '@ImageView[clickable=true] + [text="检测到新版本"]',
          snapshotUrls: 'https://i.gkd.li/i/14987173',
        },
      ],
    },
    {
      key: 2,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.allsaints.ad.sjy.reward.SRewardLoadingActivity',
            'com.allsaints.music.MainActivity',
          ],
          matches: [
            '[vid="btnFreeListening"][visibleToUser=true]',
            '[vid="close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16200623',
            'https://i.gkd.li/i/21175600',
          ],
        },
      ],
    },
  ],
});

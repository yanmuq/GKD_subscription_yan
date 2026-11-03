import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.com.gamer.android.activecenter',
  name: '巴哈姆特',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@ImageButton[desc="Interstitial close button"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/14292691',
        },
      ],
    },
  ],
});

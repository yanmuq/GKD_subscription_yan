import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.soundrecorder',
  name: '录音机',
  groups: [
    {
      key: 1,
      name: '持续-更新提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.RecordPreviewActivity',
          matches: '@[text="以后再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/i/14140552',
        },
      ],
    },
  ],
});

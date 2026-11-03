import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
  name: 'TwiTake',
  groups: [
    {
      key: 3,
      name: '限时-应用提示-评分弹窗',
      enable: false,
      desc: '点击 LATER ',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
          matches: [
            '[text="Love it"][visibleToUser=true]',
            '[text="LATER"][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13748858',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.spotify.music',
  name: 'Spotify',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: '.SpotifyMainActivity',
          matches: '[vid="ad_tag"] + [vid="close_button"][clickable=true]',
          exampleUrls: 'https://e.gkd.li/539c0135-9b5b-44c2-baec-4eb9953f8e69',
          snapshotUrls: 'https://i.gkd.li/i/24270410',
        },
      ],
    },
  ],
});

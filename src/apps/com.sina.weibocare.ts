import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibocare',
  name: 'WeiboBig',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-流量继续播放视频',
      enable: false,
      desc: '点击[播放]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.weico.international.activity.MainFragmentActivity',
          matches: '[id="com.sina.weibocare:id/ed_btn_positive"][text="播放"]',
          snapshotUrls: 'https://i.gkd.li/i/13253223',
        },
      ],
    },
  ],
});

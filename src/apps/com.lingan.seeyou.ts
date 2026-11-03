import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lingan.seeyou',
  name: '美柚',
  groups: [
    {
      key: 1,
      name: '持续-页面内广告-评论区上方卡片广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.lingan.seeyou.ui.activity.community.topicdetail.TopicDetailActivity',
          matches: '[id="com.lingan.seeyou:id/v_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14034770',
        },
      ],
    },
  ],
});

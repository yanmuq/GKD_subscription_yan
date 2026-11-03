import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      key: 2,
      name: '限时-应用提示-通知权限',
      enable: false,
      desc: '点击[暂不开启]',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.widget.MyAlertDialog',
            '.login.MainGroupActivity',
            'com.example.advertisement_business.advertisement.AdvertisementActivity',
          ],
          matches: [
            '[text="开启消息推送通知"][visibleToUser=true]',
            '[text="暂不开启"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13458779',
            'https://i.gkd.li/i/13623441',
            'https://i.gkd.li/i/13695447',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击[忽略]',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.login.StartActivity',
            'com.example.advertisement_business.advertisement.AdvertisementActivity',
          ],
          matches: ['[text="更新"] ', ' [text="忽略"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/13458796',
            'https://i.gkd.li/i/13797285',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '持续-应用提示弹窗-课程提醒',
      enable: false,
      desc: '点击[已绑定，不再提示]',
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text="课程提醒"][visibleToUser=true]',
            '[text="已绑定，不再提示"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/cceb9974-935d-496b-9b26-431864364433',
          snapshotUrls: 'https://i.gkd.li/i/23122012',
        },
      ],
    },
    {
      key: 5,
      name: '持续-应用提示弹窗-AI分析',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.able.wisdomtree.course.course.studycourse.activity.StudyCourseVideoActivity',
          matches: '@[vid="im_close"][clickable=true] - [text$="同学"]',
          snapshotUrls: 'https://i.gkd.li/i/24230330',
        },
      ],
    },
  ],
});

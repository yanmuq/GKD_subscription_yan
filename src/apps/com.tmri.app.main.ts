import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/6bbf28ed-9e78-4006-9225-49c07954ee45',
          snapshotUrls: 'https://i.gkd.li/i/25207240',
        },
      ],
    },
    {
      key: 1,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
            'com.tmri.app.ui.activity.main.TmriNewActivity',
          ],
          matches: 'ImageButton[id="com.tmri.app.main:id/btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13315944',
            'https://i.gkd.li/i/13779215',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '持续-功能操作-确认退出',
      enable: false,
      desc: '点击[确认]',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="是否确认退出?"]', '[text="确认"]'],
          snapshotUrls: 'https://i.gkd.li/i/15597285',
        },
      ],
    },
    {
      key: 3,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.tmri.app.ui.activity.main.MainTabHostNewActivity',
          matches: ['[text="立即更新"]', '[text="以后再说"]'],
          snapshotUrls: 'https://i.gkd.li/i/15751656',
        },
      ],
    },
  ],
});

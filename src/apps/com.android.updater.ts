import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.updater',
  name: '系统更新',
  groups: [
    {
      key: 0,
      name: '限时-应用提示-不开启自动更新',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: ['.MainActivity', '.UpdateActivity'],
          matches: [
            '[vid="alertTitle"][text="开启智能更新" || text="Install automatically?"]',
            '[id="android:id/button2"][text="暂不开启" || text="No"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15386937',
            'https://i.gkd.li/i/15386869',
            'https://i.gkd.li/i/18469146',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '持续-功能操作-流量更新点击继续下载',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.updater.UpdateActivity',
          matches: [
            '[text^="您当前正在使用数据网络，继续下载可能会产生流量费用"]',
            '[text="继续下载"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23182185',
        },
      ],
    },
    {
      key: 2,
      name: '持续-应用提示弹窗-不开启流量自动更新',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.updater.UpdateActivity',
          matches: ['[text="开启数据网络自动下载"]', '[text="不开启"]'],
          snapshotUrls: 'https://i.gkd.li/i/23182175',
        },
      ],
    },
  ],
});

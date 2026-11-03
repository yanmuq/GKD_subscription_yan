import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cloudpower.netsale.activity',
  name: '中国人保',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击下次再说',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds:
            'com.picc.aasipods.module.versionupdate.controller.VersionUpdateActivity',
          matches: '[id="com.cloudpower.netsale.activity:id/tvw_cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/14005533',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.longshine.nanwang.electric.charge',
  name: '顺易充',
  groups: [
    {
      key: 1,
      name: '限时-全屏广告-首页弹窗广告',
      enable: false,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.android.app.station.NewMainAct',
          matches:
            '[id="com.longshine.nanwang.electric.charge:id/bodyFL"] + [id="com.longshine.nanwang.electric.charge:id/ivClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12700011',
        },
      ],
    },
  ],
});

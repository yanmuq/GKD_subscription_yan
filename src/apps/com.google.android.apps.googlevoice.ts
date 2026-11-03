import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.apps.googlevoice',
  name: 'Voice',
  groups: [
    {
      key: 10,
      name: '持续-应用提示弹窗-跳过实体号码链接',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.google.android.apps.voice.promo.PromoActivity',
        'com.google.android.apps.voice.verification.procedure.VerificationActivity',
      ],
      rules: [
        {
          matches: [
            '[id="com.google.android.apps.googlevoice:id/title_view"][text="Link this device to Google Voice" || text="将此设备与 Google Voice 关联" || text="將這個裝置連結到 Google Voice"]',
            '[id="com.google.android.apps.googlevoice:id/skip_button"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13314255',
            'https://i.gkd.li/i/13437190',
            'https://i.gkd.li/i/23205177',
          ],
        },
      ],
    },
  ],
});

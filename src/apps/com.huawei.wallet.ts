import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
    {
      key: 1,
      name: '限时-应用提示-钱包扩展服务提示',
      enable: false,
      desc: '点击关闭',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text="开启钱包扩展服务"] +2 [id="com.huawei.wallet:id/linear_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13441814',
        },
      ],
    },
    {
      key: 2,
      name: '持续-应用提示弹窗-小额免密支付弹窗',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.huawei.petalpay.userapp.function.withhold.view.activity.PetalPayGuideSmallFreePwdActivity',
          matches: ['[text="开通小额免密支付"]', '[vid="title_close_btn"]'],
          exampleUrls: 'https://e.gkd.li/7fcdf7d8-d9db-4b30-840d-3f656f645fe3',
          snapshotUrls: 'https://i.gkd.li/i/16397908',
        },
      ],
    },
    {
      key: 3,
      name: '持续-页面内广告-首页卡片广告',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 0,
          activityIds: '.view.MainActivity',
          matches: '[vid="ad_sign_text_and_feedback"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/11edaf9a-f54c-489c-99e0-78da25a5cc9b',
          snapshotUrls: 'https://i.gkd.li/i/16833449',
        },
        {
          preKeys: [0],
          activityIds: 'com.huawei.openalliance.ad.activity.FeedbackActivity',
          matches: '[text="直接关闭"]',
          exampleUrls: 'https://e.gkd.li/f0d67fb4-ccdb-443b-8e4e-9dff2242a84f',
          snapshotUrls: 'https://i.gkd.li/i/16833452',
        },
      ],
    },
    {
      key: 4,
      name: '持续-功能操作-支付成功后点击关闭',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.huawei.nfc.carrera.ui.swipe.SwipeResultActivity',
          matches: '[vid="btn_completed"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/984fd805-ad50-4ffc-adce-fffe42109e98',
          snapshotUrls: 'https://i.gkd.li/i/18146717',
        },
      ],
    },
    {
      key: 5,
      name: '持续-应用提示弹窗-NFC权限',
      enable: false,
      desc: '点击取消',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.huawei.nfc.carrera.ui.swipe.SetDefaultPayServiceActivity',
          matches: [
            '[text*="是否每次使用华为钱包都自动开启 NFC"][visibleToUser=true]',
            '[text="取消"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/87466a06-2169-4808-971e-d347cd40ac66',
          snapshotUrls: 'https://i.gkd.li/i/20918311',
        },
      ],
    },
  ],
});

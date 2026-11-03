import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hihonor.magichome',
  name: '荣耀智慧空间',
  groups: [
    {
      key: 10,
      name: '持续-页面内广告-首页顶部广告',
      enable: false,
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules: '[id="com.hihonor.magichome:id/item_close_image"]',
      snapshotUrls: 'https://i.gkd.li/i/12843930',
    },
    {
      key: 11,
      name: '持续-应用提示弹窗-推荐服务声明',
      enable: false,
      desc: '推荐服务声明弹窗。默认点击"取消"按钮',
      activityIds: 'com.hihonor.magichome.business.MainActivity',
      rules:
        '[text$="推荐服务声明"] < LinearLayout < LinearLayout + LinearLayout > [id="com.hihonor.magichome:id/negative_btn"]',
      snapshotUrls: 'https://i.gkd.li/i/12843976',
    },
    {
      key: 12,
      name: '限时-应用提示-更新提示',
      enable: false,
      desc: '点击以后再说',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.business.MainActivity',
          matches:
            'TextView[text="立即更新"] -2 [id="com.hihonor.magichome:id/negative_btn"][text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/i/12916700',
        },
      ],
    },
  ],
});

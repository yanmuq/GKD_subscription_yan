import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 1,
      name: '持续-更新提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          activityIds: [
            '.launch.home.V5HomeActivity',
            '.workbench.myali.MyAliSettingActivity',
          ],
          matches: '[id="com.alibaba.wireless:id/update_button_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12684422',
            'https://i.gkd.li/i/12684426',
          ],
        },
        {
          key: 1,
          activityIds: '.launch.home.V5HomeActivity',
          matches: '[vid="update_pop_cancel_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/15004486',
        },
      ],
    },
    {
      key: 2,
      name: '持续-全屏广告-首页弹窗广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.alibaba.wireless.launch.home.V5HomeActivity',
          matches:
            '@Image[text*="FXa-124-124"][visibleToUser=true] <<n [id="com.alibaba.wireless:id/v_yacht_float_cell"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13683509',
            'https://i.gkd.li/i/13683510',
          ],
        },
      ],
    },
  ],
});

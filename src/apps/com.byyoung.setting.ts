import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byyoung.setting',
  name: '爱玩机工具箱',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-忽略授权提示',
      enable: false,
      activityIds: 'com.byyoung.setting.Welcome.PermissionActivity',
      rules: [
        {
          matches: '[id="com.byyoung.setting:id/tv_name"][text*="忽略授权"]',
          snapshotUrls: 'https://i.gkd.li/i/12829909',
        },
      ],
    },
  ],
});

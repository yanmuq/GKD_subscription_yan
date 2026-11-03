import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '小米相册',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-删除时勾选[同时从云端删除]',
      enable: false,
      rules: [
        {
          activityIds: 'com.miui.gallery.activity.InternalPhotoPageActivity',
          matches: '[text="同时从云端删除"][checked=false]',
          snapshotUrls: 'https://i.gkd.li/i/15804289',
        },
      ],
    },
    {
      key: 2,
      name: '持续-功能操作-流量同步自动点击[继续同步]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.BackupDetailActivity',
          matches: [
            '[text^="当前处于移动网络下，继续同步将消耗"]',
            '[text="继续同步"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23124555',
        },
      ],
    },
    {
      key: 3,
      name: '持续-应用提示弹窗-图片保存成功弹窗',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.ExternalPhotoPageActivity',
          matches: ['[text="图片已经保存到相册"]', '[text="确定"]'],
          snapshotUrls: 'https://i.gkd.li/i/23383772',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.tim',
  name: 'TIM',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-自动点击查看原图',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.richmediabrowser.AIOGalleryActivity',
            'com.tencent.richframework.gallery.QQGalleryActivity',
          ],
          matches: '[text^="查看原图"]',
          exampleUrls:
            'https://m.gkd.li/57941037/894c5e7b-aab1-452c-a2a7-67a605506c89',
          snapshotUrls: [
            'https://i.gkd.li/i/15197486',
            'https://i.gkd.li/i/17987327',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '持续-功能操作-发送图片时自动勾选[原图]',
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.mobileqq.activity.SplashActivity',
            'com.tencent.qqnt.qbasealbum.WinkHomeActivity',
          ],
          matches: '@[checked=false] + [text="原图"]',
          exampleUrls:
            'https://m.gkd.li/57941037/57b4e39f-ba48-4e57-a5de-3a461a583e60',
          snapshotUrls: [
            'https://i.gkd.li/i/15209768',
            'https://i.gkd.li/i/17987325',
          ],
        },
      ],
    },
  ],
});

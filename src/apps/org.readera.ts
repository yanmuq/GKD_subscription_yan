import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.readera',
  name: 'ReadEra',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-分享提示',
      enable: false,
      desc: '点击右上角的x',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          action: 'back',
          matches: '[text*="通过社交网络分享这款应用"]',
          snapshotUrls: 'https://i.gkd.li/i/22950138',
        },
      ],
    },
    {
      key: 2,
      name: '持续-全屏广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            '@[desc="关闭"][clickable=true] < * +n * >4 [text^="高级版"]',
          snapshotUrls: 'https://i.gkd.li/i/24335645',
        },
      ],
    },
    {
      key: 3,
      name: '持续-全屏广告-高级版',
      enable: false,
      desc: '注意：此规则会关闭手动打开的高级版开通界面，但该界面有时会自动弹出',
      rules: [
        {
          fastQuery: true,
          activityIds: 'org.readera.MainActivity',
          matches:
            '@[desc="关闭"][clickable=true] < * + * >5 [text="ReadEra Premium"]',
          snapshotUrls: 'https://i.gkd.li/i/24981838',
        },
      ],
    },
  ],
});

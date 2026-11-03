import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.browser',
  name: 'vivo浏览器',
  groups: [
    {
      key: 1,
      name: '持续-应用提示弹窗-免流提示',
      enable: false,
      rules: [
        {
          activityIds: 'com.vivo.browser.pendant.PendantActivity',
          matches:
            '[id="com.vivo.browser:id/dialog_button_right"][text="继续浏览"]',
          snapshotUrls: 'https://i.gkd.li/i/12847431',
        },
      ],
    },
    {
      key: 2,
      name: '持续-页面内广告-天气详情页面',
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: 'com.vivo.browser.lightweb.LightWebNomalStartActivity',
          matches: '[text$="广告"] +5 * > Image',
          snapshotUrls: 'https://i.gkd.li/i/14392332',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 1,
      name: '持续-更新提示',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.splash.TMSplashActivity',
            '.maintab.module.TMMainTabActivity',
            '.webview.TMCommonWebViewActivity',
            '.themis.container.TMThemisActivity',
          ],
          matches: '[id="com.tmall.wireless:id/update_button_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13162603',
            'https://i.gkd.li/i/13258201',
            'https://i.gkd.li/i/13399536',
            'https://i.gkd.li/i/19881137',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '持续-全屏广告-弹窗广告',
      enable: false,
      rules: [
        {
          activityIds: [
            'com.tmall.wireless.maintab.module.TMMainTabActivity',
            'com.tmall.wireless.turboweb.container.TurboWebViewActivity',
            'com.tmall.wireless.webview.TMCommonWebViewActivity',
          ],
          matches:
            'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13222394',
            'https://i.gkd.li/i/13222500',
            'https://i.gkd.li/i/13222510',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '持续-应用提示弹窗-通知权限',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.messagebox.activity.TMMsgboxMainActivity',
          matches: 'View[text="开启系统通知"] - View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13258215',
        },
      ],
    },
  ],
});

import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]) || ([vid="splash_skip_button"][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/3e2357fd-dced-4929-85e0-a9a06ce5fea0',
          snapshotUrls: [
            'https://i.gkd.li/i/19580847',
            'https://i.gkd.li/i/19633020',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.framework.widget.dialog.judian',
          matches:
            '[text$="新版本"] +2 * >2 [id="com.qidian.QDReader:id/cancel"]',
          snapshotUrls: 'https://i.gkd.li/i/12641026',
        },
        {
          key: 2,
          activityIds: 'com.tencent.upgrade.ui.UpgradeDialogActivity',
          matches: '[id="com.qidian.QDReader:id/upgrade_dialog_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/13116821',
        },
      ],
    },
    {
      key: 2,
      name: '持续-应用提示弹窗-青少年模式',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.bll.helper.z0',
            '.ui.activity.MainGroupActivity',
            '.framework.widget.dialog.judian',
          ],
          matches: '[vid="btnEnterTeen"] + [vid="btnCancel"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12640241',
            'https://i.gkd.li/i/12709168',
            'https://i.gkd.li/i/12905817',
            'https://i.gkd.li/i/17879416',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '持续-全屏广告',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: [
            'com.qidian.QDReader.ui.activity.MainGroupActivity',
            'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
            'com.qidian.QDReader.framework.widget.dialog.judian',
            'com.qidian.QDReader.ui.activity.BookLastPageNewActivity',
          ],
          matches: '[vid="imgClose" || vid="btnClose"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12640195',
            'https://i.gkd.li/i/12640158',
            'https://i.gkd.li/i/12818198',
            'https://i.gkd.li/i/13469004',
            'https://i.gkd.li/i/23210736',
            'https://i.gkd.li/i/23249358',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '限时-应用提示-通知权限',
      enable: false,
      desc: '点击顶部提醒左侧关闭按钮',
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.afollestad.materialdialogs.MaterialDialog',
          matches:
            '@[id="com.qidian.QDReader:id/ivClose"] + [text^="开启推送"]',
          snapshotUrls: 'https://i.gkd.li/i/12640242',
        },
      ],
    },
    {
      key: 5,
      name: '持续-页面内广告-悬浮广告',
      enable: false,
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            'com.qidian.QDReader.ui.activity.QDBookDetailActivity',
            'com.qidian.QDReader.ui.activity.MainGroupActivity',
          ],
          matches: '[id="com.qidian.QDReader:id/ivAdClose"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12717032',
            'https://i.gkd.li/i/13459031',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '持续-功能操作-起点中文网登录自动确认',
      enable: false,
      desc: '自动点击"登录"',
      rules: [
        {
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
          matches: '[id="scanLogin"]',
          snapshotUrls: 'https://i.gkd.li/i/12903081',
        },
      ],
    },
    {
      key: 11,
      name: '持续-页面内广告-信息流广告',
      enable: false,
      desc: '点击关闭',
      rules: [
        {
          activityIds:
            'com.qidian.QDReader.flutter.DailyReadingMainPageActivity',
          matches: 'View[desc="更多游戏"] - ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13406169',
        },
      ],
    },
    {
      key: 12,
      name: '持续-功能操作-福利中心看完广告-知道了',
      enable: false,
      desc: '点击[知道了]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.QDBrowserActivity',
          matches:
            '@TextView[childCount=0][text$="知道了"][visibleToUser=true] <<n [id="com.qidian.QDReader:id/webViewContainer"]',
          exampleUrls: 'https://e.gkd.li/54f41a5a-1c71-4618-bdab-5335172ab7f5',
          snapshotUrls: [
            'https://i.gkd.li/i/13606901', //v7.9.318 已失效，该版本的起点已无法看福利中心广告
            'https://i.gkd.li/i/22909666', //422
            'https://i.gkd.li/i/24339296', //428
          ],
        },
      ],
    },
    {
      key: 13,
      name: '持续-全屏广告-红包弹窗',
      enable: false,
      desc: '点击X',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity',
          matches:
            '[id="com.qidian.QDReader:id/rootView"] > [id="com.qidian.QDReader:id/btnHongbaoClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13918466',
        },
      ],
    },
    {
      key: 14,
      name: '持续-功能操作-移动网络下自动点击播放视频',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
          matches: [
            '[text^="当前处于移动网络"]',
            '@[clickable=true] >2 [text="播放"]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57',
          snapshotUrls: 'https://i.gkd.li/i/15857381',
        },
      ],
    },
    {
      key: 15,
      name: '持续-功能操作-自动签到',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: '.ui.activity.MainGroupActivity',
          excludeMatches: '[vid="tvTipNum"][text="--"][visibleToUser=true]',
          matches: '@[vid="btnCheckIn"] >2 [text="签到"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22634962',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23210761',
            'https://i.gkd.li/i/23211622',
          ],
        },
        {
          preKeys: [0],
          fastQuery: true,
          activityIds: '.ui.activity.QDBrowserActivity',
          matches:
            '@View[id=null][childCount=0][clickable=true] < View < View < WebView[text="福利中心"] < WebView < FrameLayout < [vid="webViewContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/24012947',
        },
      ],
    },
  ],
});

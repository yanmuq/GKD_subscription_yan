import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 0,
      name: '限时-开屏广告',
      enable: true,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12867875',
            'https://i.gkd.li/i/16812698',
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
          key: 0,
          name: '腾讯广告',
          fastQuery: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
            'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
          ],
          matches: '[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12867751',
            'https://i.gkd.li/i/12894813',
            'https://i.gkd.li/i/13522998',
            'https://i.gkd.li/i/14554866',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          fastQuery: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches:
            'ImageView < @ViewGroup[clickable=true] < ViewGroup <n * + ViewGroup >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13451304',
            'https://i.gkd.li/i/14519779',
            'https://i.gkd.li/i/14731371',
          ],
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: 'Image < @View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13523288',
        },
        {
          key: 4,
          name: '字节广告-2',
          fastQuery: true,
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches:
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893408',
            'https://i.gkd.li/i/13929945',
          ],
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.mercury.sdk.activity.InterstitialPortraitActivity',
          matches: '[vid="iv_itr_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15360368',
        },
      ],
    },
    {
      key: 3,
      name: '持续-页面内广告-卡片广告',
      enable: false,
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: [
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
            'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
          ],
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849755',
            'https://i.gkd.li/i/13929965',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/13063381',
        },
      ],
    },
    {
      key: 5,
      name: '限时-应用提示-更新提示',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: [
            '.activity.main.activity.MainActivity',
            '.activity.init.InitActivity',
          ],
          matches: '[id="com.zmzx.college.search:id/update_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13063373',
            'https://i.gkd.li/i/13623469',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '限时-应用提示-通知权限',
      enable: false,
      fastQuery: true,
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.main.activity.MainActivity',
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13440939',
        },
      ],
    },
    {
      key: 7,
      name: '持续-应用提示弹窗-请求好评弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: '.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13476308',
        },
      ],
    },
    {
      key: 11,
      name: '持续-全屏广告-邀好友得开学好礼',
      enable: false,
      desc: '使用返回关闭',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds:
            'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
          matches:
            '[visibleToUser=true][text="邀好友得开学好礼"] <<n [vid="webview_root_layout"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d625fcaa-4cf3-4c92-9b27-10542b0262bb',
          snapshotUrls: 'https://i.gkd.li/i/14555042',
        },
      ],
    },
    {
      key: 12,
      name: '持续-页面内广告-底部卡片广告',
      enable: false,
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      activityIds:
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      rules: [
        {
          key: 0,
          matches: '@[desc$="dislike"] <<n [vid="rlBottomADContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15902162',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15902298',
        },
      ],
    },
  ],
});

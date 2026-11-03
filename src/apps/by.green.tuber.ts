import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'by.green.tuber',
  name: 'YouTube',
  groups: [
    {
      key: 1,
      name: '持续-功能操作-关闭底部播放横条',
      enable: false,
      rules: [
        {
          activityIds: '.MainActivity',
          matches:
            'ImageButton[desc="预览缩略图"] +2 LinearLayout > ImageButton + ImageButton[visibleToUser=true][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24590682',
        },
      ],
    },
  ],
});

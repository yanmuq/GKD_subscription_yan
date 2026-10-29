# 言木七的 GKD 订阅（AIsouler 维护版）

基于 [AIsouler/GKD_subscription](https://github.com/AIsouler/GKD_subscription) 的个人维护分支，由 [yanmuq](https://github.com/yanmuq) 维护。保留原作者及所有贡献者署名，仅供个人学习使用，沿用原仓库“禁止在国内平台传播”的声明。

## 订阅与启用

将下列地址添加到 GKD：

```text
https://raw.githubusercontent.com/yanmuq/GKD_subscription_yan/main/dist/AIsouler_gkd.json5
```

订阅 ID 保持为 `666`，用于替换原 AIsouler 订阅。已使用原订阅时，请改为上述更新地址；不要同时使用原版与本维护版。这里不发布到原作者的 npm 包或镜像。

默认只开启“开屏广告”类别，其他类别按需开启。此订阅与 [言木七的附加订阅（ID 808）](https://github.com/yanmuq/muqi_gkd) 独立维护；同一应用的相同用途规则只在一个订阅中启用，以免重复点击。云闪付的应用规则统一等待 500 毫秒后通过 `clickCenter` 点击，实际是否仍出现应用提示需在设备上确认。

以下为已发布订阅的统计；尚未发布的源码调整会在下一次构建时合入。

<!-- subscription-stats:start -->

| 项目 | 数量 |
| --- | --- |
| 版本 | v407 |
| 应用 | 880 |
| 应用规则组 | 2066 |
| 全局规则组 | 3 |

<!-- subscription-stats:end -->

- [已发布应用与规则清单](./dist/README.md)
- [待确认的下一轮精简名单](./docs/current/pruning-plan.md)
- [当前维护任务与优化边界](./docs/current/maintenance.md)

## 检查与发布

推送后运行检查，不立即发布。每周三北京时间 03:20 检查规则、构建脚本和构建配置；有变动才构建发布，没有变动就跳过。也可在 GitHub Actions 手动运行 `build_release`。

构建只更新当前订阅、版本索引、规则清单和本页统计。用户在 GKD 订阅界面下拉即可检查更新。

## 开发

使用 Node.js 24 与项目锁定的 pnpm 10.25.0：

```sh
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

先阅读 [AGENTS.md](./AGENTS.md) 与 [贡献指南](./CONTRIBUTING.md)。修改规则时参照 [GKD 官方 API](https://gkd.li/api/)、[查询优化](https://gkd.li/guide/optimize) 和 [快照审查工具](https://i.gkd.li/)。规则保留快照与图片链接。

按个人使用需求精简细分用途应用，未决定的候选保留在待确认清单中。当前维护范围以 `src/apps/` 为准。全局规则的应用保护名单具有防止误触的作用，不随应用规则精简一起删除。

## 致谢

感谢 [AIsouler](https://github.com/AIsouler)、[原仓库贡献者](https://github.com/AIsouler/GKD_subscription/graphs/contributors) 和 [gkd-kit](https://github.com/gkd-kit) 提供的规则、工具及文档。

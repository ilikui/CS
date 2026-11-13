# CS · Cloudflare Pages 发布目录

本目录用于 Cloudflare Pages 静态发布，生产站点：**https://cs.likui.space**

## 部署方式

- 仓库：`ilikui/CS`
- 发布分支：`cloudflare-pages`
- Pages 项目根目录：`public`
- 构建命令：留空（纯静态站点）
- 输出目录：`.`

站点从 GitHub 仓库读取 Markdown 文档，使用 GitHub Contents/Raw 内容服务动态加载，因此无需把整份学习资料复制到 `public`。新增或更新仓库 Markdown 后，重新部署即可更新站点目录与内容。

## 本地预览

在本目录启动任意静态 HTTP 服务，例如：

```bash
python -m http.server 8080
```

然后打开 http://localhost:8080。

> 说明：该站点依赖 GitHub API 与 jsDelivr CDN。GitHub 未认证 API 有请求频率限制；数学公式由 KaTeX 渲染。


## 自动部署

Cloudflare Pages 已连接该分支；推送到 `cloudflare-pages` 会触发生产部署。

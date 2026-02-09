# 越南支付 - Vietnam Pay

越南支付 SEO 网站，基于 Next.js 14 (App Router) 构建，部署到 Vercel。

## 功能

- 🔍 SEO 高度优化（meta tags, Open Graph, JSON-LD, sitemap, robots.txt）
- 📱 响应式设计，蓝白金融科技风格
- 📝 丰富的内容页面（首页、服务、博客、关于、联系）
- ⚡ Next.js App Router，服务端渲染

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 部署到 Vercel

### 方式一：通过 Vercel CLI

```bash
npm i -g vercel
vercel
```

### 方式二：通过 GitHub

1. 将代码推送到 GitHub 仓库
2. 在 [vercel.com](https://vercel.com) 导入该仓库
3. 自动检测 Next.js 框架并部署

### 环境变量（可选）

- `NEXT_PUBLIC_SITE_URL` - 网站 URL（默认: `https://vietnam-pay.vercel.app`）

## 目录结构

```
src/app/
  layout.tsx          # 全局布局（Header + Footer + JSON-LD）
  page.tsx            # 首页
  globals.css         # 全局样式
  sitemap.ts          # 自动生成 sitemap.xml
  robots.ts           # 自动生成 robots.txt
  about/page.tsx      # 关于我们
  services/page.tsx   # 服务详情
  contact/page.tsx    # 联系方式
  blog/
    vietnam-payment-guide/page.tsx    # 越南支付全攻略
    vietnam-payment-methods/page.tsx  # 支付方式介绍
```

## 联系方式

Telegram: [@zfxt5](https://t.me/zfxt5)

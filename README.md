# OpenClaw 文档网站

这是一个使用 Next.js 重构的 OpenClaw 项目文档网站。OpenClaw 是一个开源的 AI 助手框架，旨在将强大的大语言模型（LLM）连接到你的日常数字工具和工作流中。

## 项目概述

- 使用 Next.js App Router 架构
- 集成 Tailwind CSS 进行样式设计
- 支持静态导出，适用于 GitHub Pages 部署
- 响应式设计，支持桌面和移动设备
- 包含完整的文档导航系统

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建和部署

```bash
# 构建生产版本（静态导出）
npm run build

# 本地预览生产版本
npm start
```

## GitHub Pages 部署

此项目已配置 GitHub Actions 自动部署到 GitHub Pages。

1. 确保仓库设置中启用了 GitHub Pages
2. 选择 "GitHub Actions" 作为源
3. 推送更改到 main 分支触发部署

工作流配置位于 `.github/workflows/deploy.yml`。

## 项目结构

- `src/app/` - 页面和布局组件
- `src/components/` - 可复用的UI组件
- `public/` - 静态资源

## 自定义域名

CNAME 文件位于 `public/CNAME`，可根据需要修改。
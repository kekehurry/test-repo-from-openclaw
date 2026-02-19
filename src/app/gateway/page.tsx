import GenericPage from '@/components/GenericPage';

export default function GatewayPage() {
  const contentSections = [
    {
      title: "什么是 Gateway",
      content: (
        <div>
          <p className="mb-4">
            Gateway 是 OpenClaw 的核心组件，负责连接各种消息平台和处理用户请求。
          </p>
          <p>
            它提供了一个统一的接口来管理不同的通信渠道，如微信、Telegram、飞书等。
          </p>
        </div>
      )
    },
    {
      title: "配置 Gateway",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">基础配置</h3>
          <p className="mb-4">
            Gateway 的配置通常在 <code>config/gateway.json</code> 文件中定义：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            {`{
  "port": 3000,
  "host": "localhost",
  "ssl": false,
  "rateLimit": {
    "windowMs": 15 * 60 * 1000, // 15分钟
    "max": 100 // 最多100次请求
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "your-telegram-bot-token"
    },
    "wechat": {
      "enabled": false,
      "appId": "your-wechat-app-id"
    }
  }
}`}
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">启动 Gateway</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>npm run gateway:start</code>
          </pre>
        </div>
      )
    },
    {
      title: "可用选项",
      content: (
        <div>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>端口配置</strong>: 更改默认端口 (3000) 以避免冲突</li>
            <li><strong>SSL 配置</strong>: 启用 HTTPS 加密通信</li>
            <li><strong>限流配置</strong>: 防止滥用和恶意请求</li>
            <li><strong>通道配置</strong>: 启用/禁用特定的消息通道</li>
          </ul>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "📥 安装指南", href: "/installation" },
    { text: "💬 频道设置", href: "/channels" },
    { text: "🔧 配置文件详解", href: "/config" }
  ];

  return (
    <GenericPage
      title="Gateway 配置"
      subtitle="配置您的助手"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
import GenericPage from '@/components/GenericPage';

export default function ChannelsPage() {
  const contentSections = [
    {
      title: "什么是 Channels",
      content: (
        <div>
          <p className="mb-4">
            Channels 是 OpenClaw 中用于连接不同消息平台的功能模块。它允许您的 AI 助手通过多种渠道接收和发送消息。
          </p>
          <p>
            通过 Channels，您可以同时管理 Telegram、微信、飞书等多个平台的消息。
          </p>
        </div>
      )
    },
    {
      title: "支持的平台",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">✅ 已支持平台</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Telegram - 通过 Bot API 连接</li>
            <li>微信 - 通过 WeChat Bot 接入</li>
            <li>飞书 - 使用飞书开放平台 API</li>
            <li>Slack - 通过 Slack 应用集成</li>
            <li>Discord - 使用 Discord Bot</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">🔧 配置 Channels</h3>
          <p className="mb-4">
            在 <code>config/channels.json</code> 文件中配置不同渠道：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            {`{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "your-telegram-bot-token",
      "webhook": {
        "enabled": true,
        "path": "/api/webhook/telegram"
      }
    },
    "wechat": {
      "enabled": false,
      "appId": "your-wechat-app-id",
      "appSecret": "your-wechat-app-secret"
    }
  }
}`}
          </pre>
        </div>
      )
    },
    {
      title: "添加新渠道",
      content: (
        <div>
          <ol className="list-decimal pl-5 space-y-2">
            <li>在配置文件中启用相应渠道</li>
            <li>填写必要的 API 凭据</li>
            <li>重启 OpenClaw 服务</li>
            <li>验证渠道连接状态</li>
          </ol>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "📥 安装指南", href: "/installation" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "🔧 技能(Skills)介绍", href: "/skills" }
  ];

  return (
    <GenericPage
      title="频道设置"
      subtitle="连接消息平台"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
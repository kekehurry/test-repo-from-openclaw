import GenericPage from '@/components/GenericPage';

export default function ConfigPage() {
  const contentSections = [
    {
      title: "配置概览",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 使用模块化配置系统，所有配置文件都位于 <code>config/</code> 目录下。
          </p>
          <p>
            主要配置包括系统设置、模型配置、通道配置、安全设置等。
          </p>
        </div>
      )
    },
    {
      title: "主配置文件",
      content: (
        <div>
          <p className="mb-4">
            主配置文件 <code>config/main.json</code> 包含系统的基本设置：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "server": {
    "port": 3000,
    "host": "0.0.0.0",
    "ssl": false,
    "rateLimit": {
      "windowMs": 15 * 60 * 1000,
      "max": 100
    }
  },
  "models": {
    "default": "gpt-4-turbo",
    "temperature": 0.7,
    "maxTokens": 2048
  },
  "database": {
    "type": "sqlite",
    "path": "./data/openclaw.db"
  },
  "logging": {
    "level": "info",
    "file": "./logs/app.log"
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "环境变量配置",
      content: (
        <div>
          <p className="mb-4">
            通过 <code>.env</code> 文件配置敏感信息和环境特定设置：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`# API Keys
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# Server Settings
PORT=3000
HOST=0.0.0.0

# Database
DATABASE_URL=sqlite://./data/openclaw.db

# Security
ENCRYPTION_KEY=your_encryption_key_here
SESSION_SECRET=your_session_secret_here

# Features
ENABLE_TELEMETRY=false
DEBUG_MODE=false`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "配置管理",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">配置验证</h3>
          <p className="mb-4">
            启动时系统会自动验证配置的有效性，无效配置将导致启动失败并显示错误信息。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">配置重载</h3>
          <p className="mb-4">
            某些配置项支持运行时热更新，无需重启服务即可生效。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">配置备份</h3>
          <p>
            建议定期备份配置文件，以防意外修改或丢失。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "🧠 模型配置", href: "/models" },
    { text: "💬 频道设置", href: "/channels" }
  ];

  return (
    <GenericPage
      title="配置文件详解"
      subtitle="管理系统和功能配置"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
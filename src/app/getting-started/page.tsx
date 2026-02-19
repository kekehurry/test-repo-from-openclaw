import GenericPage from '@/components/GenericPage';

export default function GettingStartedPage() {
  const contentSections = [
    {
      title: "概述",
      content: (
        <div>
          <p className="mb-4">
            欢迎使用 OpenClaw！本指南将帮助您在 5 分钟内搭建您的 AI 助手。
          </p>
          <p className="mb-4">
            OpenClaw 是一个高度可定制的 AI 助手框架，支持多种消息平台和丰富的扩展功能。
          </p>
        </div>
      )
    },
    {
      title: "准备工作",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">✅ 系统要求</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Node.js v18 或更高版本</li>
            <li>npm 或 yarn 包管理器</li>
            <li>一个可用的大语言模型 API 密钥（如 OpenAI、Anthropic 等）</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">🔐 API 密钥准备</h3>
          <p className="mb-4">
            根据您想要使用的模型服务，准备相应的 API 密钥：
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>OpenAI: <a href="https://platform.openai.com/api-keys" className="text-primary hover:underline">获取 OpenAI API 密钥</a></li>
            <li>Anthropic Claude: <a href="https://console.anthropic.com/" className="text-primary hover:underline">获取 Claude API 密钥</a></li>
            <li>以及其他支持的模型服务</li>
          </ul>
        </div>
      )
    },
    {
      title: "安装步骤",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">1. 克隆项目</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>git clone https://github.com/openclaw/openclaw.git</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. 安装依赖</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>cd openclaw<br/>npm install</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. 配置环境变量</h3>
          <p className="mb-4">
            创建 .env 文件并填入您的 API 密钥：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>cp .env.example .env<br/># 编辑 .env 文件并添加您的密钥</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. 启动应用</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>npm run dev</code>
          </pre>
        </div>
      )
    },
    {
      title: "下一步",
      content: (
        <div>
          <p className="mb-4">
            成功启动后，您可以访问配置界面开始设置您的 AI 助手。
          </p>
          <p>
            建议接下来阅读安装指南和 Gateway 配置文档以进一步定制您的助手。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "📥 安装指南", href: "/installation" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "💬 频道设置", href: "/channels" },
    { text: "🔧 技能(Skills)介绍", href: "/skills" }
  ];

  return (
    <GenericPage
      title="快速开始"
      subtitle="5 分钟内搭建您的 AI 助手"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
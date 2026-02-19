import GenericPage from '@/components/GenericPage';

export default function SetupPage() {
  const contentSections = [
    {
      title: "初始化设置",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 初始化设置向导将帮助您完成首次配置，建立基本运行环境。
          </p>
          <p>
            此设置过程会引导您完成基本配置、API 密钥设置和首选项配置。
          </p>
        </div>
      )
    },
    {
      title: "设置向导",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">1. 环境检测</h3>
          <p className="mb-4">
            检测系统环境和依赖项是否满足 OpenClaw 的运行要求。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">2. API 密钥配置</h3>
          <p className="mb-4">
            配置您的大语言模型 API 密钥（如 OpenAI、Anthropic 等）。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">3. 消息通道配置</h3>
          <p className="mb-4">
            选择并配置您想要连接的消息平台（如 Telegram、微信等）。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">4. 数据存储配置</h3>
          <p className="mb-4">
            选择数据存储方式（SQLite、PostgreSQL 或其他数据库）。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">5. 安全设置</h3>
          <p>
            配置加密密钥、访问权限和安全策略。
          </p>
        </div>
      )
    },
    {
      title: "设置命令",
      content: (
        <div>
          <p className="mb-4">
            您可以通过以下命令启动设置向导：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>npx openclaw setup</code>
          </pre>

          <p className="mb-4">
            或者交互式地进行特定部分的配置：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>npx openclaw config --interactive</code>
          </pre>
        </div>
      )
    },
    {
      title: "后续步骤",
      content: (
        <div>
          <p className="mb-4">
            完成初始设置后，您可能还需要：
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>配置特定的 AI Agents 以满足您的需求</li>
            <li>设置技能(Skills)以扩展助手功能</li>
            <li>配置自动化任务（cron jobs）</li>
            <li>设置安全和访问控制规则</li>
          </ul>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "📥 安装指南", href: "/installation" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "🔧 配置文件详解", href: "/config" }
  ];

  return (
    <GenericPage
      title="初始化设置"
      subtitle="配置您的 OpenClaw 实例"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
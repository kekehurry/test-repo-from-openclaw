import GenericPage from '@/components/GenericPage';

export default function AgentsPage() {
  const contentSections = [
    {
      title: "AI Agent 概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的 AI Agent 系统允许您创建专门化的助手来处理特定任务。
          </p>
          <p>
            每个 Agent 都可以有不同的角色、能力和行为模式，使您的 AI 助手能够执行复杂的任务。
          </p>
        </div>
      )
    },
    {
      title: "内置 Agents",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">Research Agent</h3>
          <p className="mb-4">
            专门用于信息收集和研究任务，擅长网络搜索和数据聚合。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Code Agent</h3>
          <p className="mb-4">
            专注于编程任务，可以帮助编写、调试和优化代码。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">File Agent</h3>
          <p className="mb-4">
            管理文件操作，包括读取、写入、转换和组织文件。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Schedule Agent</h3>
          <p>
            处理日程安排和提醒任务，与日历系统集成。
          </p>
        </div>
      )
    },
    {
      title: "Agent 配置",
      content: (
        <div>
          <p className="mb-4">
            您可以在 <code>config/agents.json</code> 中配置不同的 Agent：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "research": {
    "enabled": true,
    "model": "gpt-4-turbo",
    "maxIterations": 5,
    "tools": ["web-search", "calculator", "file-access"]
  },
  "code": {
    "enabled": true,
    "model": "gpt-4-turbo",
    "capabilities": ["programming", "debugging", "optimization"],
    "languages": ["javascript", "python", "typescript"]
  },
  "scheduler": {
    "enabled": true,
    "integration": ["google-calendar", "outlook"],
    "permissions": ["read", "write"]
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "自定义 Agents",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">创建新 Agent</h3>
          <p className="mb-4">
            您可以通过定义新的 Agent 配置来创建专门化的助手，用于特定任务或领域。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Agent 协作</h3>
          <p className="mb-4">
            多个 Agent 可以协作完成复杂任务，例如 Research Agent 收集信息后由 Code Agent 实现解决方案。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">权限管理</h3>
          <p>
            为不同的 Agent 设置适当的权限，确保系统安全和数据保护。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "🧠 模型配置", href: "/models" },
    { text: "💡 技能(Skills)", href: "/skills" },
    { text: "⚙️ Gateway 配置", href: "/gateway" }
  ];

  return (
    <GenericPage
      title="AI Agents"
      subtitle="创建专门化的智能助手"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
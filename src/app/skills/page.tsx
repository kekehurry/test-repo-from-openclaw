import GenericPage from '@/components/GenericPage';

export default function SkillsPage() {
  const contentSections = [
    {
      title: "技能 (Skills) 概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的技能系统允许您扩展 AI 助手的功能，使其能够执行特定任务。
          </p>
          <p>
            技能是可重用的功能模块，使您的助手能够与外部系统交互、执行操作和处理数据。
          </p>
        </div>
      )
    },
    {
      title: "内置技能",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">文件管理技能</h3>
          <p className="mb-4">
            读取、写入、搜索和管理文件及目录。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Web 搜索技能</h3>
          <p className="mb-4">
            执行网络搜索并获取最新的信息。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">计算器技能</h3>
          <p className="mb-4">
            执行数学计算和单位转换。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">代码执行技能</h3>
          <p className="mb-4">
            在安全环境中运行代码片段。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">日历集成技能</h3>
          <p>
            管理事件、设置提醒、查看日程。
          </p>
        </div>
      )
    },
    {
      title: "配置技能",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/skills.json</code> 中启用和配置技能：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "enabledSkills": [
    "fileManager",
    "webSearch",
    "calculator",
    "codeExecutor",
    "calendar",
    "emailSender",
    "browserAutomation"
  ],
  "skillSettings": {
    "fileManager": {
      "allowedPaths": ["/safe/path/to/files"],
      "maxFileSizeMB": 10
    },
    "webSearch": {
      "provider": "google|bing|duckduckgo",
      "apiKey": "your-api-key",
      "resultCount": 5
    },
    "codeExecutor": {
      "enabledLanguages": ["javascript", "python", "bash"],
      "timeoutSeconds": 30,
      "sandbox": true
    }
  },
  "permissions": {
    "admin": ["all-skills"],
    "user": ["webSearch", "calculator", "fileManager-read"]
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "创建自定义技能",
      content: (
        <div>
          <p className="mb-4">
            您可以创建自定义技能来扩展助手的功能：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`// 示例：自定义技能模板
export default {
  name: "customSkill",
  description: "描述此技能的功能",
  parameters: {
    type: "object",
    properties: {
      param1: {
        type: "string",
        description: "参数说明"
      }
    },
    required: ["param1"]
  },
  execute: async (params) => {
    // 实现技能逻辑
    return {
      result: "操作结果",
      success: true
    };
  }
};`}</code>
          </pre>
          <p>
            自定义技能可以集成任何外部服务或执行任何授权的操作。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "🧠 模型配置", href: "/models" },
    { text: "🤖 AI Agents", href: "/agents" },
    { text: "🌐 频道设置", href: "/channels" }
  ];

  return (
    <GenericPage
      title="技能 (Skills)"
      subtitle="扩展助手功能"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
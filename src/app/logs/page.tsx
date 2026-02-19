import GenericPage from '@/components/GenericPage';

export default function LogsPage() {
  const contentSections = [
    {
      title: "日志系统概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的日志系统记录系统活动、错误信息和性能指标。
          </p>
          <p>
            通过日志分析，您可以了解系统运行状况、排查问题并优化性能。
          </p>
        </div>
      )
    },
    {
      title: "日志级别",
      content: (
        <div>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Error</strong>: 错误信息，表示系统功能出现问题</li>
            <li><strong>Warn</strong>: 警告信息，表示潜在问题</li>
            <li><strong>Info</strong>: 一般信息，记录系统状态和活动</li>
            <li><strong>Debug</strong>: 调试信息，详细的内部系统信息</li>
            <li><strong>Trace</strong>: 追踪信息，最详细的信息用于问题诊断</li>
          </ul>
        </div>
      )
    },
    {
      title: "日志配置",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/logs.json</code> 中配置日志设置：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "level": "info",
  "format": "json|text|structured",
  "transports": [
    {
      "type": "file",
      "filename": "./logs/app.log",
      "maxSize": "20m",
      "maxFiles": "14d"
    },
    {
      "type": "console",
      "colorize": true
    },
    {
      "type": "http",
      "host": "logs.destination.com",
      "path": "/logs"
    }
  ],
  "filter": {
    "exclude": [
      "healthcheck",
      "static-assets"
    ]
  },
  "retention": {
    "local": "30d",
    "archived": "365d"
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "日志分析和监控",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">实时日志查看</h3>
          <p className="mb-4">
            通过管理界面实时查看系统日志流。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">日志搜索</h3>
          <p className="mb-4">
            使用关键词、时间范围和日志级别过滤搜索日志条目。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">警报规则</h3>
          <p className="mb-4">
            配置基于日志模式的自动警报，当出现错误或异常时通知管理员。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">性能分析</h3>
          <p>
            通过日志数据分析系统性能瓶颈和优化机会。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🔍 系统状态", href: "/status" },
    { text: "🏥 系统健康", href: "/health" },
    { text: "🔒 安全设置", href: "/security" },
    { text: "⚙️ 配置文件详解", href: "/config" }
  ];

  return (
    <GenericPage
      title="系统日志"
      subtitle="查看和分析系统活动"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
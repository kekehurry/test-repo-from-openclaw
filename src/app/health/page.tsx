import GenericPage from '@/components/GenericPage';

export default function HealthPage() {
  const contentSections = [
    {
      title: "系统健康概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的健康检查系统监控所有关键组件的状态，确保系统正常运行。
          </p>
          <p>
            健康检查提供实时指标和警报，帮助您及时发现和解决问题。
          </p>
        </div>
      )
    },
    {
      title: "健康检查指标",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">系统资源</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>CPU 使用率</strong>: 监控处理器负载</li>
            <li><strong>内存使用</strong>: 跟踪内存消耗和可用内存</li>
            <li><strong>磁盘空间</strong>: 监控存储使用情况</li>
            <li><strong>网络连接</strong>: 检查网络状态和带宽</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">服务状态</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>数据库连接</strong>: 检查数据库连接池状态</li>
            <li><strong>模型 API 可用性</strong>: 验证 AI 模型服务连接</li>
            <li><strong>消息队列</strong>: 监控消息处理状态</li>
            <li><strong>通道服务</strong>: 验证各消息通道可用性</li>
          </ul>
        </div>
      )
    },
    {
      title: "API 健康端点",
      content: (
        <div>
          <p className="mb-4">
            通过 HTTP 端点获取系统健康信息：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>GET /api/health</code>
          </pre>

          <p className="mb-4">
            响应示例：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "status": "healthy",
  "timestamp": "2023-12-01T10:00:00Z",
  "checks": {
    "database": {
      "status": "pass",
      "responseTime": 25
    },
    "models": {
      "status": "pass",
      "providers": {
        "openai": "pass",
        "anthropic": "pass"
      }
    },
    "storage": {
      "status": "pass",
      "freeSpace": "125GB"
    },
    "network": {
      "status": "pass",
      "connectivity": "ok"
    }
  },
  "details": {
    "version": "1.0.0",
    "uptime": "2 days, 14:30:15",
    "activeUsers": 12,
    "pendingJobs": 3
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "自动恢复机制",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">故障检测</h3>
          <p className="mb-4">
            自动检测服务故障并记录问题详情。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">恢复尝试</h3>
          <p className="mb-4">
            根据配置策略自动尝试恢复故障的服务。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">通知系统</h3>
          <p>
            当检测到严重问题时，通过配置的通知渠道发送警报。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🔍 系统状态", href: "/status" },
    { text: "📋 系统日志", href: "/logs" },
    { text: "🔧 系统管理", href: "/update" },
    { text: "🔒 安全设置", href: "/security" }
  ];

  return (
    <GenericPage
      title="系统健康"
      subtitle="监控系统组件状态"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
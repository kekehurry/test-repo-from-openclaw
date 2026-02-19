import GenericPage from '@/components/GenericPage';

export default function StatusPage() {
  const contentSections = [
    {
      title: "系统状态概览",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 状态页面提供系统的实时运行信息，包括服务健康状况、资源使用情况等。
          </p>
          <p>
            通过状态监控，您可以了解系统性能、识别潜在问题并优化资源配置。
          </p>
        </div>
      )
    },
    {
      title: "系统指标",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">CPU 和内存使用</h3>
          <p className="mb-4">
            监控 CPU 利用率和内存占用情况，确保系统在最佳状态下运行。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">模型 API 响应时间</h3>
          <p className="mb-4">
            跟踪 AI 模型 API 的平均响应时间，以评估整体系统性能。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">消息处理速率</h3>
          <p className="mb-4">
            监控消息处理速度和队列长度，确保消息不会积压。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">错误率</h3>
          <p>
            跟踪系统错误和 API 调用失败的比例。
          </p>
        </div>
      )
    },
    {
      title: "服务健康检查",
      content: (
        <div>
          <p className="mb-4">
            通过 <code>/api/health</code> 端点可以获取详细的系统健康信息：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "status": "healthy",
  "timestamp": "2023-12-01T10:00:00Z",
  "services": {
    "database": "connected",
    "models": "available",
    "storage": "ok",
    "network": "connected"
  },
  "metrics": {
    "uptime": "2 days, 14:30:15",
    "memoryUsed": "1.2 GB",
    "memoryTotal": "4 GB",
    "cpuLoad": 23.5
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "查看系统日志",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">实时日志</h3>
          <p className="mb-4">
            查看系统的实时日志输出，以诊断问题或了解系统行为。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">历史日志</h3>
          <p className="mb-4">
            访问历史日志文件以进行更深入的问题分析。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">日志级别</h3>
          <p>
            根据需要调整日志详细程度（error, warn, info, debug）。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🔧 系统管理", href: "/health" },
    { text: "📋 系统日志", href: "/logs" },
    { text: "⚙️ 配置管理", href: "/config" },
    { text: "🔒 安全设置", href: "/security" }
  ];

  return (
    <GenericPage
      title="系统状态"
      subtitle="监控系统运行状况"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
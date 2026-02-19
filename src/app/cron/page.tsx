import GenericPage from '@/components/GenericPage';

export default function CronPage() {
  const contentSections = [
    {
      title: "定时任务 (Cron) 概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的 Cron 系统允许您设置定时任务，自动化重复性工作。
          </p>
          <p>
            通过 Cron 任务，您可以安排定期的数据同步、报告生成、系统维护等操作。
          </p>
        </div>
      )
    },
    {
      title: "Cron 表达式语法",
      content: (
        <div>
          <p className="mb-4">
            Cron 表达式由五个字段组成，分别代表分钟、小时、日期、月份和星期几：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`* * * * * - 每分钟执行
0 * * * * - 每小时执行
0 9 * * * - 每天上午9点执行
0 9 * * 1 - 每周一上午9点执行
0 */6 * * * - 每6小时执行一次`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "配置定时任务",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/cron.json</code> 中定义您的定时任务：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "scheduledTasks": [
    {
      "name": "dailyHealthCheck",
      "schedule": "0 8 * * *",
      "action": "run_health_check",
      "enabled": true,
      "notification": {
        "channel": "telegram",
        "recipients": ["admin_user_id"]
      }
    },
    {
      "name": "weeklyReport",
      "schedule": "0 9 * * 1",
      "action": "generate_weekly_report",
      "enabled": true,
      "params": {
        "reportType": "usage_statistics",
        "recipients": ["manager@example.com"]
      }
    },
    {
      "name": "cleanupOldFiles",
      "schedule": "0 2 * * 0",
      "action": "clean_old_files",
      "enabled": true,
      "params": {
        "ageThresholdDays": 30
      }
    }
  ]
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "内置任务类型",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">系统维护任务</h3>
          <p className="mb-4">
            日志清理、临时文件删除、缓存刷新等。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">数据同步任务</h3>
          <p className="mb-4">
            定期同步外部数据源、备份数据、更新模型等。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">监控任务</h3>
          <p className="mb-4">
            系统健康检查、服务可用性监控、性能报告生成等。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">用户互动任务</h3>
          <p>
            定期提醒、报告推送、生日祝福等个性化消息。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "💡 技能(Skills)", href: "/skills" },
    { text: "🔄 更新指南", href: "/update" }
  ];

  return (
    <GenericPage
      title="定时任务 (Cron)"
      subtitle="自动化重复性工作"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
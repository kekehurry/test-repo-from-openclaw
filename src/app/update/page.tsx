import GenericPage from '@/components/GenericPage';

export default function UpdatePage() {
  const contentSections = [
    {
      title: "更新管理",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的更新系统允许您安全地升级软件版本、应用补丁和新功能。
          </p>
          <p>
            更新管理包括自动检查、安全验证和回滚选项，确保系统始终运行在最佳状态。
          </p>
        </div>
      )
    },
    {
      title: "更新类型",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">安全更新</h3>
          <p className="mb-4">
            紧急修复漏洞和安全问题的补丁。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">功能更新</h3>
          <p className="mb-4">
            添加新功能和改进现有功能的版本。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">性能更新</h3>
          <p className="mb-4">
            优化性能和修复错误的补丁。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">重大更新</h3>
          <p>
            包含破坏性变更的重大版本更新，需要额外的迁移步骤。
          </p>
        </div>
      )
    },
    {
      title: "更新配置",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/update.json</code> 中配置更新策略：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "autoCheck": true,
  "channel": "stable|beta|alpha",
  "schedule": {
    "checkInterval": "24h",
    "maintenanceWindow": {
      "start": "02:00",
      "end": "04:00",
      "timezone": "Asia/Shanghai"
    }
  },
  "verification": {
    "checksum": true,
    "signature": true,
    "repository": "https://releases.openclaw.com"
  },
  "rollback": {
    "enabled": true,
    "keepVersions": 2,
    "autoRollback": true
  },
  "notifications": {
    "enabled": true,
    "channels": ["email", "telegram"],
    "events": ["downloaded", "installed", "failed"]
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "手动更新",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">使用 npm 更新</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code># 检查可用更新<br/>npm outdated openclaw<br/><br/># 更新到最新版本<br/>npm update openclaw<br/><br/># 更新到特定版本<br/>npm install openclaw@1.2.3</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">使用 CLI 命令</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code># 检查更新<br/>openclaw update --check<br/><br/># 下载更新<br/>openclaw update --download<br/><br/># 应用更新<br/>openclaw update --apply</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Docker 更新</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code># 拉取最新镜像<br/>docker pull openclaw/openclaw:latest<br/><br/># 停止当前容器<br/>docker stop openclaw-container<br/><br/># 启动新版本容器<br/>docker run -d --name openclaw-container [options] openclaw/openclaw:latest</code>
          </pre>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🔍 系统状态", href: "/status" },
    { text: "🔄 系统维护", href: "/health" },
    { text: "📋 更新日志", href: "/logs" },
    { text: "⚙️ 配置管理", href: "/config" }
  ];

  return (
    <GenericPage
      title="系统更新"
      subtitle="管理和应用系统更新"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
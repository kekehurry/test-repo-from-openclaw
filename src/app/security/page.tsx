import GenericPage from '@/components/GenericPage';

export default function SecurityPage() {
  const contentSections = [
    {
      title: "安全概述",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的安全框架保护您的数据和系统免受未经授权的访问。
          </p>
          <p>
            通过多层次的安全措施，确保您的 AI 助手安全可靠地运行。
          </p>
        </div>
      )
    },
    {
      title: "认证和授权",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">身份验证</h3>
          <p className="mb-4">
            支持多种身份验证方式，包括 API 密钥、OAuth 2.0、JWT 令牌等。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">权限控制</h3>
          <p className="mb-4">
            细粒度的权限管理，控制用户对不同功能和数据的访问。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">角色管理</h3>
          <p>
            预设角色（管理员、用户、访客）和自定义角色的权限分配。
          </p>
        </div>
      )
    },
    {
      title: "安全配置",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/security.json</code> 中配置安全设置：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "authentication": {
    "jwt": {
      "secret": "your-jwt-secret-key",
      "expiry": "24h"
    },
    "apiKeys": {
      "salt": "your-api-key-salt",
      "expiry": "30d"
    }
  },
  "encryption": {
    "algorithm": "aes-256-gcm",
    "keyRotationDays": 90
  },
  "rateLimiting": {
    "points": 20,
    "duration": 60,
    "blockDuration": 300
  },
  "firewall": {
    "whitelist": ["192.168.1.0/24"],
    "blacklist": ["10.0.0.0/8"],
    "geoBlocking": ["country-codes"]
  },
  "dataProtection": {
    "piiMasking": true,
    "logEncryption": true,
    "backupEncryption": true
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "最佳实践",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">密钥管理</h3>
          <p className="mb-4">
            使用安全的密钥管理服务，定期轮换加密密钥和 API 密钥。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">网络安全</h3>
          <p className="mb-4">
            使用防火墙、VPN 和专用网络来保护通信。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">审计和监控</h3>
          <p>
            定期审查访问日志和权限分配，确保安全策略有效实施。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🔒 身份验证", href: "/setup" },
    { text: "🛡️ 系统防护", href: "/health" },
    { text: "📋 系统日志", href: "/logs" },
    { text: "⚙️ 配置文件详解", href: "/config" }
  ];

  return (
    <GenericPage
      title="安全设置"
      subtitle="保护系统和数据安全"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
import GenericPage from '@/components/GenericPage';

export default function BrowserPage() {
  const contentSections = [
    {
      title: "浏览器自动化概览",
      content: (
        <div>
          <p className="mb-4">
            OpenClaw 的浏览器自动化功能允许 AI 助手与网页进行交互，执行浏览、搜索、数据提取等任务。
          </p>
          <p>
            通过集成浏览器自动化工具，您的助手可以获得实时信息、执行在线操作并处理网页内容。
          </p>
        </div>
      )
    },
    {
      title: "浏览器功能",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">网页浏览</h3>
          <p className="mb-4">
            访问网页、获取页面内容、解析结构化数据。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">表单操作</h3>
          <p className="mb-4">
            自动填充表单、提交数据、处理验证码。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">屏幕截图</h3>
          <p className="mb-4">
            捕获网页截图并分析视觉内容。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">数据提取</h3>
          <p>
            从网页中提取结构化数据，如表格、列表和特定元素。
          </p>
        </div>
      )
    },
    {
      title: "配置浏览器设置",
      content: (
        <div>
          <p className="mb-4">
            在 <code>config/browser.json</code> 中配置浏览器自动化选项：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>{`{
  "engine": "puppeteer|playwright",
  "defaultBrowser": "chromium",
  "timeout": 30000,
  "maxConcurrency": 5,
  "userAgent": "OpenClaw Bot 1.0",
  "stealth": true,
  "proxy": {
    "enabled": false,
    "url": "http://proxy-server:port"
  },
  "capabilities": {
    "screenshot": true,
    "pdf": true,
    "javascript": true,
    "cookies": true
  },
  "security": {
    "allowedDomains": ["*.example.com", "trusted-site.com"],
    "blockedDomains": ["malicious-site.com"]
  }
}`}</code>
          </pre>
        </div>
      )
    },
    {
      title: "使用场景",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">研究和数据收集</h3>
          <p className="mb-4">
            自动化搜索网络、收集信息、分析内容。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">电子商务</h3>
          <p className="mb-4">
            价格跟踪、库存检查、产品比较。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">社交媒体管理</h3>
          <p className="mb-4">
            发布内容、监控提及、分析趋势。
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">任务自动化</h3>
          <p>
            填写表单、预约服务、预订票务等日常任务。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "🧠 模型配置", href: "/models" },
    { text: "💡 技能(Skills)", href: "/skills" },
    { text: "🌐 频道设置", href: "/channels" }
  ];

  return (
    <GenericPage
      title="浏览器自动化"
      subtitle="网页交互和数据提取"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
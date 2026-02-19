import GenericPage from '@/components/GenericPage';

export default function InstallationPage() {
  const contentSections = [
    {
      title: "概述",
      content: (
        <div>
          <p className="mb-4">
            本指南将详细介绍 OpenClaw 的多种安装方式，您可以根据您的环境和需求选择最适合的方式。
          </p>
          <p>
            OpenClaw 支持在多种操作系统和环境下运行，包括个人电脑、服务器和树莓派等设备。
          </p>
        </div>
      )
    },
    {
      title: "系统要求",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">最小配置</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>CPU: 双核 2GHz 或更高</li>
            <li>内存: 4GB RAM 或更多</li>
            <li>存储: 至少 2GB 可用空间</li>
            <li>网络: 稳定的互联网连接</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">推荐配置</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>CPU: 四核 2.5GHz 或更高</li>
            <li>内存: 8GB RAM 或更多</li>
            <li>存储: SSD 存储，至少 10GB 可用空间</li>
            <li>网络: 高速稳定的互联网连接</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">支持的操作系统</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Linux (Ubuntu 20.04+, CentOS 8+, Debian 10+)</li>
            <li>macOS (10.15 Catalina 或更高版本)</li>
            <li>Windows 10/11 (推荐使用 WSL2)</li>
          </ul>
        </div>
      )
    },
    {
      title: "安装方式",
      content: (
        <div>
          <h3 className="text-xl font-semibold mt-6 mb-3">方法一：使用 npm (推荐)</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code># 全局安装<br/>npm install -g openclaw<br/><br/># 或在项目中安装<br/>npm install openclaw</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">方法二：使用 Docker</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code># 拉取最新镜像<br/>docker pull openclaw/openclaw:latest<br/><br/># 运行容器<br/>docker run -d --name openclaw -p 3000:3000 openclaw/openclaw:latest</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">方法三：从源码安装</h3>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>git clone https://github.com/openclaw/openclaw.git<br/>cd openclaw<br/>npm install<br/>npm run build<br/>npm start</code>
          </pre>
        </div>
      )
    },
    {
      title: "验证安装",
      content: (
        <div>
          <p className="mb-4">
            安装完成后，可以通过以下命令验证是否安装成功：
          </p>
          <pre className="bg-code-bg p-4 rounded-lg mb-4 overflow-x-auto">
            <code>openclaw --version</code>
          </pre>
          <p>
            如果显示版本号，则表示安装成功。
          </p>
        </div>
      )
    }
  ];

  const quickLinks = [
    { text: "🚀 快速开始", href: "/getting-started" },
    { text: "⚙️ Gateway 配置", href: "/gateway" },
    { text: "🔧 配置文件详解", href: "/config" },
    { text: "📝 更新指南", href: "/update" }
  ];

  return (
    <GenericPage
      title="安装指南"
      subtitle="多种安装方式可选"
      contentSections={contentSections}
      quickLinks={quickLinks}
    />
  );
}
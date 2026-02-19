import MainLayout from './MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="header mb-8">
        <h1 className="text-4xl font-extrabold mb-3">什么是 OpenClaw</h1>
        <p className="text-lg text-secondary-color">开源 AI 助手框架 - 连接大模型与你的数字生活</p>
      </div>

      <div className="content-section mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">概述</h2>
        <p className="mb-4">
          <strong>OpenClaw</strong> 是一个开源的 AI 助手框架，旨在将强大的大语言模型（LLM）连接到你的日常数字工具和工作流中。
          它可以运行在各种设备上（电脑、服务器、Raspberry Pi 等），通过插件系统支持多种消息平台（微信、Telegram、飞书、Slack 等）。
        </p>
        <p>
          不同于普通的聊天机器人，OpenClaw 设计为一个<strong>可编程的个人 AI 助手</strong>——它可以帮你管理文件、发送消息、操作浏览器、
          执行定时任务、管理日历和邮件，真正成为你的数字分身。
        </p>
      </div>

      <div className="content-section mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">核心特性</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">🤖 多平台支持</h3>
        <p className="mb-4">支持微信、Telegram、飞书、Slack、Discord、Signal 等主流通讯平台，一个助手同时管理多个渠道。</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">🔌 插件系统</h3>
        <p className="mb-4">灵活的技能（Skills）机制，随时扩展功能。支持浏览器控制、文件管理、日历集成、邮件处理等。</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">🔐 本地优先</h3>
        <p className="mb-4">数据存储在本地，保护隐私。可选云端同步，满足不同部署需求。</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">⚡ 实时响应</h3>
        <p className="mb-4">心跳机制（Heartbeat）定期检查重要事项，主动推送通知，不错过任何重要信息。</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">🧠 记忆系统</h3>
        <p className="mb-4">长期记忆和短期记忆机制，让 AI 助手记住你的偏好、习惯和重要事项。</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">🌐 跨设备运行</h3>
        <p className="mb-4">支持在各种设备上运行，从个人电脑到云服务器，甚至是 Raspberry Pi。</p>
      </div>

      <div className="content-section mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">应用场景</h2>

        <div className="examples mb-6">
          <h3 className="text-lg font-semibold text-[#065f46] mt-0">个人 AI 助手</h3>
          <ul className="list-disc pl-5">
            <li>管理日程和提醒</li>
            <li>处理邮件和消息</li>
            <li>智能回复和自动过滤</li>
            <li>文件整理和搜索</li>
          </ul>
        </div>

        <div className="examples mb-6">
          <h3 className="text-lg font-semibold text-[#065f46] mt-0">开发者的好伙伴</h3>
          <ul className="list-disc pl-5">
            <li>代码审查和编写辅助</li>
            <li>自动化测试和部署</li>
            <li>监控告警处理</li>
            <li>文档生成和维护</li>
          </ul>
        </div>

        <div className="examples mb-8">
          <h3 className="text-lg font-semibold text-[#065f46] mt-0">团队协作工具</h3>
          <ul className="list-disc pl-5">
            <li>多频道消息汇总</li>
            <li>知识库问答</li>
            <li>会议纪要和任务分配</li>
            <li>工作流自动化</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">快速链接</h2>
        <ul className="command-list">
          <li className="mb-3 p-3 bg-code-bg rounded-md">
            <a href="/getting-started" className="font-medium text-primary hover:underline">
              🚀 快速开始
            </a> - 5 分钟内搭建你的 AI 助手
          </li>
          <li className="mb-3 p-3 bg-code-bg rounded-md">
            <a href="/installation" className="font-medium text-primary hover:underline">
              📥 安装指南
            </a> - 多种安装方式可选
          </li>
          <li className="mb-3 p-3 bg-code-bg rounded-md">
            <a href="/gateway" className="font-medium text-primary hover:underline">
              ⚙️ Gateway 配置
            </a> - 配置你的助手
          </li>
          <li className="mb-3 p-3 bg-code-bg rounded-md">
            <a href="/channels" className="font-medium text-primary hover:underline">
              💬 频道设置
            </a> - 连接消息平台
          </li>
        </ul>
      </div>

      <div className="footer mt-10 pt-5 border-t border-border-color text-secondary-color text-sm">
        <p>OpenClaw 开源项目 · MIT License · <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline">GitHub</a></p>
      </div>
    </MainLayout>
  );
}
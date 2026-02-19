import MainLayout from './MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="header mb-10">
        <div className="relative">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            什么是 OpenClaw
          </h1>
          <p className="text-xl text-secondary-color max-w-3xl">
            开源 AI 助手框架 - 连接大模型与你的数字生活
          </p>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full opacity-10 blur-xl"></div>
        </div>
      </div>

      <div className="content-section mb-10 bg-gradient-to-br from-card-bg to-primary/5 p-8 rounded-2xl border border-border-color shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-border-color">概述</h2>
            <p className="mb-4 text-lg">
              <strong>OpenClaw</strong> 是一个开源的 AI 助手框架，旨在将强大的大语言模型（LLM）连接到你的日常数字工具和工作流中。
              它可以运行在各种设备上（电脑、服务器、Raspberry Pi 等），通过插件系统支持多种消息平台（微信、Telegram、飞书、Slack 等）。
            </p>
            <p className="text-lg">
              不同于普通的聊天机器人，OpenClaw 设计为一个<strong>可编程的个人 AI 助手</strong>——它可以帮你管理文件、发送消息、操作浏览器、
              执行定时任务、管理日历和邮件，真正成为你的数字分身。
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl w-full max-w-md">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <div className="text-sm font-mono bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">OpenClaw Assistant</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 max-w-xs">
                      你好，我是你的AI助手
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-lg px-4 py-2 max-w-xs">
                      你能帮我管理日程吗？
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-blue-100 dark:bg-blue-900/50 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 max-w-xs">
                      当然可以！我已连接到您的日历系统
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section mb-10">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-border-color">核心特性</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-primary">🤖 多平台支持</h3>
            <p className="text-secondary-color">支持微信、Telegram、飞书、Slack、Discord、Signal 等主流通讯平台，一个助手同时管理多个渠道。</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-success">🔌 插件系统</h3>
            <p className="text-secondary-color">灵活的技能（Skills）机制，随时扩展功能。支持浏览器控制、文件管理、日历集成、邮件处理等。</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3" style={{ color: 'rgb(147 51 234)' }}>🔐 本地优先</h3>
            <p className="text-secondary-color">数据存储在本地，保护隐私。可选云端同步，满足不同部署需求。</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-amber-600">⚡ 实时响应</h3>
            <p className="text-secondary-color">心跳机制（Heartbeat）定期检查重要事项，主动推送通知，不错过任何重要信息。</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-emerald-600">🧠 记忆系统</h3>
            <p className="text-secondary-color">长期记忆和短期记忆机制，让 AI 助手记住你的偏好、习惯和重要事项。</p>
          </div>

          <div className="bg-card-bg p-6 rounded-xl border border-border-color hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mt-2 mb-3 text-cyan-600">🌐 跨设备运行</h3>
            <p className="text-secondary-color">支持在各种设备上运行，从个人电脑到云服务器，甚至是 Raspberry Pi。</p>
          </div>
        </div>
      </div>

      <div className="content-section mb-10">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-border-color">应用场景</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="examples">
            <h3 className="text-lg font-semibold text-[#065f46] mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              个人 AI 助手
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>管理日程和提醒</li>
              <li>处理邮件和消息</li>
              <li>智能回复和自动过滤</li>
              <li>文件整理和搜索</li>
            </ul>
          </div>

          <div className="examples">
            <h3 className="text-lg font-semibold text-[#065f46] mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              开发者的好伙伴
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>代码审查和编写辅助</li>
              <li>自动化测试和部署</li>
              <li>监控告警处理</li>
              <li>文档生成和维护</li>
            </ul>
          </div>

          <div className="examples">
            <h3 className="text-lg font-semibold text-[#065f46] mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              团队协作工具
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>多频道消息汇总</li>
              <li>知识库问答</li>
              <li>会议纪要和任务分配</li>
              <li>工作流自动化</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-border-color">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-border-color flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          快速开始
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="mb-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-border-color hover:shadow-md transition-shadow">
            <a href="/getting-started" className="font-medium text-primary hover:underline flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              🚀 快速开始
            </a>
            <p className="text-sm text-center text-secondary-color mt-2">5 分钟内搭建你的 AI 助手</p>
          </div>
          <div className="mb-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-border-color hover:shadow-md transition-shadow">
            <a href="/installation" className="font-medium text-primary hover:underline flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              📥 安装指南
            </a>
            <p className="text-sm text-center text-secondary-color mt-2">多种安装方式可选</p>
          </div>
          <div className="mb-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-border-color hover:shadow-md transition-shadow">
            <a href="/gateway" className="font-medium text-primary hover:underline flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              ⚙️ Gateway 配置
            </a>
            <p className="text-sm text-center text-secondary-color mt-2">配置你的助手</p>
          </div>
          <div className="mb-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-border-color hover:shadow-md transition-shadow">
            <a href="/channels" className="font-medium text-primary hover:underline flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              💬 频道设置
            </a>
            <p className="text-sm text-center text-secondary-color mt-2">连接消息平台</p>
          </div>
        </div>
      </div>

      <div className="footer mt-12 pt-6 border-t border-border-color text-secondary-color text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>OpenClaw 开源项目 · MIT License · <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline font-medium">GitHub</a></p>
          <p className="mt-2 md:mt-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            现代 AI 助手框架
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
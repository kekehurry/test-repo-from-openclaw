import MainLayout from './MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="header mb-10">
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
            什么是 OpenClaw
          </h1>
          <p className="text-xl text-secondary-color max-w-3xl leading-relaxed">
            开源 AI 助手框架 - 连接大模型与你的数字生活
          </p>
          <div className="absolute -top-4 -right-4 w-40 h-40 bg-gradient-to-r from-primary to-accent rounded-full opacity-5 blur-3xl"></div>
        </div>
      </div>

      <div className="content-section mb-10 bg-gradient-to-br from-card-bg via-primary/3 to-card-bg p-8 rounded-2xl border border-border-color shadow-xl">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 pb-3 border-b border-border-color text-heading">概述</h2>
            <p className="mb-5 text-lg leading-relaxed">
              <strong className="text-primary">OpenClaw</strong> 是一个开源的 AI 助手框架，旨在将强大的大语言模型（LLM）连接到你的日常数字工具和工作流中。
              它可以运行在各种设备上（电脑、服务器、Raspberry Pi 等），通过插件系统支持多种消息平台（微信、Telegram、飞书、Slack 等）。
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              不同于普通的聊天机器人，OpenClaw 设计为一个 <strong className="text-primary">可编程的个人 AI 助手</strong> ——它可以帮你管理文件、发送消息、操作浏览器、
              执行定时任务、管理日历和邮件，真正成为你的数字分身。
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl w-full max-w-md">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full mr-1.5"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-1.5"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full mr-3"></div>
                  <div className="text-xs font-mono bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded text-gray-600 dark:text-gray-300">OpenClaw Assistant</div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-start">
                    <div className="bg-blue-50 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 max-w-xs">
                      你好，我是你的AI助手
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg px-4 py-2 max-w-xs shadow-md">
                      你能帮我管理日程吗？
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-blue-50 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 max-w-xs">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1.5 text-primary inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>当然可以！</span>
                      </span>
                      我已连接到您的日历系统
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section mb-10">
        <h2 className="text-3xl font-bold mb-8 pb-3 border-b border-border-color text-heading">核心特性</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-primary transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">🤖 多平台支持</h3>
            <p className="text-secondary-color leading-relaxed">支持微信、Telegram、飞书、Slack、Discord、Signal 等主流通讯平台，一个助手同时管理多个渠道。</p>
          </div>

          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-success transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-success">🔌 插件系统</h3>
            <p className="text-secondary-color leading-relaxed">灵活的技能（Skills）机制，随时扩展功能。支持浏览器控制、文件管理、日历集成、邮件处理等。</p>
          </div>

          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-purple-500 transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-purple-600">🔐 本地优先</h3>
            <p className="text-secondary-color leading-relaxed">数据存储在本地，保护隐私。可选云端同步，满足不同部署需求。</p>
          </div>

          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-amber-500 transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-amber-600">⚡ 实时响应</h3>
            <p className="text-secondary-color leading-relaxed">心跳机制（Heartbeat）定期检查重要事项，主动推送通知，不错过任何重要信息。</p>
          </div>

          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-emerald-500 transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-emerald-600">🧠 记忆系统</h3>
            <p className="text-secondary-color leading-relaxed">长期记忆和短期记忆机制，让 AI 助手记住你的偏好、习惯和重要事项。</p>
          </div>

          <div className="bg-card-bg p-7 rounded-xl border border-border-color hover:border-cyan-500 transition-all duration-300 hover:shadow-lg-card hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-600">🌐 跨设备运行</h3>
            <p className="text-secondary-color leading-relaxed">支持在各种设备上运行，从个人电脑到云服务器，甚至是 Raspberry Pi。</p>
          </div>
        </div>
      </div>

      <div className="content-section mb-10">
        <h2 className="text-3xl font-bold mb-8 pb-3 border-b border-border-color text-heading">应用场景</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="examples rounded-xl p-6 border-l-4 border-teal-500">
            <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400 mt-0 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              个人 AI 助手
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
              <li>管理日程和提醒</li>
              <li>处理邮件和消息</li>
              <li>智能回复和自动过滤</li>
              <li>文件整理和搜索</li>
            </ul>
          </div>

          <div className="examples rounded-xl p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mt-0 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              开发者的好伙伴
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
              <li>代码审查和编写辅助</li>
              <li>自动化测试和部署</li>
              <li>监控告警处理</li>
              <li>文档生成和维护</li>
            </ul>
          </div>

          <div className="examples rounded-xl p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mt-0 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              团队协作工具
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-foreground leading-relaxed">
              <li>多频道消息汇总</li>
              <li>知识库问答</li>
              <li>会议纪要和任务分配</li>
              <li>工作流自动化</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content-section bg-gradient-to-r from-primary/3 to-accent/3 p-8 rounded-2xl border border-primary/20">
        <h2 className="text-3xl font-bold mb-8 pb-3 border-b border-border-color flex items-center text-heading">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          快速开始
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="group mb-3 p-5 bg-white dark:bg-gray-800 rounded-xl border border-border-color hover:border-primary hover:shadow-lg-card hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <a href="/getting-started" className="font-medium text-primary hover:underline block">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 mx-auto shadow-md group-hover:shadow-lg transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-1">🚀 快速开始</div>
                <p className="text-sm text-secondary-color">5 分钟内搭建你的 AI 助手</p>
              </div>
            </a>
          </div>
          <div className="group mb-3 p-5 bg-white dark:bg-gray-800 rounded-xl border border-border-color hover:border-success hover:shadow-lg-card hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <a href="/installation" className="font-medium text-primary hover:underline block">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center mb-3 mx-auto shadow-md group-hover:shadow-lg transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-1">📥 安装指南</div>
                <p className="text-sm text-secondary-color">多种安装方式可选</p>
              </div>
            </a>
          </div>
          <div className="group mb-3 p-5 bg-white dark:bg-gray-800 rounded-xl border border-border-color hover:border-purple-500 hover:shadow-lg-card hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <a href="/gateway" className="font-medium text-primary hover:underline block">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-3 mx-auto shadow-md group-hover:shadow-lg transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-1">⚙️ Gateway 配置</div>
                <p className="text-sm text-secondary-color">配置你的助手</p>
              </div>
            </a>
          </div>
          <div className="group mb-3 p-5 bg-white dark:bg-gray-800 rounded-xl border border-border-color hover:border-cyan-500 hover:shadow-lg-card hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <a href="/channels" className="font-medium text-primary hover:underline block">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 mx-auto shadow-md group-hover:shadow-lg transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold mb-1">💬 频道设置</div>
                <p className="text-sm text-secondary-color">连接消息平台</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer mt-16 pt-8 border-t border-border-color text-secondary-color text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="flex items-center gap-2">
            <span className="text-primary font-bold">OpenClaw</span>
            <span>·</span>
            <span>MIT License</span>
            <span>·</span>
            <a href="https://github.com/openclaw/openclaw" className="text-primary hover:text-primary-hover font-medium hover:underline transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </p>
          <p className="flex items-center text-subtle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            现代 AI 助手框架
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-border-color text-center text-xs text-subtle">
          © 2026 OpenClaw - 开源项目
        </div>
      </div>
    </MainLayout>
  );
}
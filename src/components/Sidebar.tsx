'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: '入门指南',
    items: [
      { name: '什么是 OpenClaw', href: '/', activePaths: ['/', '/index'] },
      { name: '快速开始', href: '/getting-started', activePaths: ['/getting-started'] },
      { name: '安装指南', href: '/installation', activePaths: ['/installation'] },
    ],
  },
  {
    title: '核心命令',
    items: [
      { name: 'gateway', href: '/gateway', activePaths: ['/gateway'] },
      { name: 'config', href: '/config', activePaths: ['/config'] },
      { name: 'setup', href: '/setup', activePaths: ['/setup'] },
      { name: 'message', href: '/message', activePaths: ['/message'] },
      { name: 'channels', href: '/channels', activePaths: ['/channels'] },
    ],
  },
  {
    title: '高级功能',
    items: [
      { name: 'agents', href: '/agents', activePaths: ['/agents'] },
      { name: 'cron', href: '/cron', activePaths: ['/cron'] },
      { name: 'browser', href: '/browser', activePaths: ['/browser'] },
      { name: 'skills', href: '/skills', activePaths: ['/skills'] },
      { name: 'models', href: '/models', activePaths: ['/models'] },
    ],
  },
  {
    title: '系统管理',
    items: [
      { name: 'status', href: '/status', activePaths: ['/status'] },
      { name: 'health', href: '/health', activePaths: ['/health'] },
      { name: 'logs', href: '/logs', activePaths: ['/logs'] },
      { name: 'security', href: '/security', activePaths: ['/security'] },
      { name: 'update', href: '/update', activePaths: ['/update'] },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar shadow-sm">
      <div className="sidebar-header px-6 pb-5 border-b border-border-color mb-5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            OpenClaw 文档
          </h1>
        </div>
      </div>

      <nav className="px-4 py-2">
        {navigation.map((section, index) => (
          <div key={index} className="nav-section group">
            <h2 className="opacity-80 group-hover:opacity-100 transition-opacity">
              {section.title}
            </h2>
            <ul className="nav-links">
              {section.items.map((item, itemIndex) => {
                const isActive = item.activePaths.some(path =>
                  pathname.startsWith(path) ||
                  (pathname === '/' && item.activePaths.includes('/'))
                );

                return (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`transition-all duration-200 flex items-center ${
                        isActive
                          ? 'bg-gradient-to-r from-primary/10 to-transparent text-primary font-semibold border-l-2 border-primary pl-3'
                          : 'hover:bg-primary/5 hover:text-primary pl-2'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                      {isActive && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto opacity-70">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Additional resources section */}
        <div className="mt-8 pt-6 border-t border-border-color">
          <h2 className="opacity-80 group-hover:opacity-100 transition-opacity mb-3">外部资源</h2>
          <ul className="nav-links">
            <li>
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/5 hover:text-primary pl-2 flex items-center"
              >
                GitHub 仓库
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/5 hover:text-primary pl-2 flex items-center"
              >
                Discord 社区
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
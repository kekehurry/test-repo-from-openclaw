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
      <div className="sidebar-header px-5 pb-4 border-b border-border-color mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <h1 className="text-lg font-semibold text-foreground">
            OpenClaw
          </h1>
        </div>
      </div>

      <nav className="px-3 py-2">
        {navigation.map((section, index) => (
          <div key={index} className="nav-section">
            <h2 className="opacity-80">
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
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'hover:bg-primary/5 hover:text-primary'
                      }`}
                    >
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* Additional resources section */}
        <div className="mt-6 pt-4 border-t border-border-color">
          <h2 className="opacity-80 mb-2">外部资源</h2>
          <ul className="nav-links">
            <li>
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/5 hover:text-primary flex items-center"
              >
                GitHub 仓库
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/5 hover:text-primary flex items-center"
              >
                Discord 社区
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
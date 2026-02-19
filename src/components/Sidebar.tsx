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
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-primary shadow-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <h1 className="text-base font-bold">
            OpenClaw
          </h1>
        </div>
      </div>

      <nav className="px-3 py-2">
        {navigation.map((section, index) => (
          <div key={index} className="nav-section">
            <h2 className="uppercase tracking-wide">
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
                          ? 'bg-primary/10 text-primary font-medium shadow-sm'
                          : 'hover:bg-primary/8 hover:text-primary'
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
          <h2 className="uppercase tracking-wide mb-2.5">外部资源</h2>
          <ul className="nav-links">
            <li>
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/8 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub 仓库
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-primary/8 hover:text-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a17.582 17.582 0 0 0-5.487 0 12.46 12.46 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.117 14.117 0 0 0 1.226-1.994.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.012c3.928 1.793 8.176 1.793 12.062 0a.074.074 0 0 1 .078.012 10.278 10.278 0 0 0 .378.292.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.994a.077.077 0 0 0 .084.027 19.938 19.938 0 0 0 6.002-3.03.082.082 0 0 0 .031-.054c.538-5.177-.838-9.672-3.549-13.515a.073.073 0 0 0-.033-.031zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord 社区
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
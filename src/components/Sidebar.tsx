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
      <div className="sidebar-header px-5 pb-5 border-b border-border-color mb-5">
        <h1 className="text-xl font-bold text-primary">OpenClaw 文档</h1>
      </div>

      <nav className="px-5">
        {navigation.map((section, index) => (
          <div key={index} className="nav-section">
            <h2>{section.title}</h2>
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
                      className={`transition-all duration-200 ${isActive ? 'bg-[#eef2ff] text-primary font-medium' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
import MainLayout from '@/app/MainLayout';

export default function GenericPage({
  title,
  subtitle,
  contentSections,
  quickLinks = [],
}: {
  title: string;
  subtitle?: string;
  contentSections: { title: string; content: React.ReactNode }[];
  quickLinks?: { text: string; href: string }[];
}) {
  return (
    <MainLayout>
      <div className="header mb-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-base text-secondary-color">{subtitle}</p>}
      </div>

      {contentSections.map((section, index) => (
        <div key={index} className="content-section mb-6">
          <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border-color">{section.title}</h2>
          {section.content}
        </div>
      ))}

      {quickLinks.length > 0 && (
        <div className="content-section">
          <h2 className="text-xl font-semibold mb-3 pb-1 border-b border-border-color">
            快速链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickLinks.map((link, index) => (
              <div key={index} className="command-list">
                <div className="mb-2 p-2 bg-code-bg rounded-md">
                  <a href={link.href} className="font-medium text-primary hover:underline">
                    {link.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="footer mt-8 pt-4 border-t border-border-color text-secondary-color text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>OpenClaw 开源项目 · MIT License · <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline">GitHub</a></p>
          <p className="mt-1 md:mt-0">现代 AI 助手框架</p>
        </div>
      </div>
    </MainLayout>
  );
}
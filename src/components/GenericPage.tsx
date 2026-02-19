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
      <div className="header mb-8">
        <h1 className="text-4xl font-extrabold mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-secondary-color">{subtitle}</p>}
      </div>

      {contentSections.map((section, index) => (
        <div key={index} className="content-section mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">{section.title}</h2>
          {section.content}
        </div>
      ))}

      {quickLinks.length > 0 && (
        <div className="content-section">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">快速链接</h2>
          <ul className="command-list">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-3 p-3 bg-code-bg rounded-md">
                <a href={link.href} className="font-medium text-primary hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="footer mt-10 pt-5 border-t border-border-color text-secondary-color text-sm">
        <p>OpenClaw 开源项目 · MIT License · <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline">GitHub</a></p>
      </div>
    </MainLayout>
  );
}
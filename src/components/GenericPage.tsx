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
        <div key={index} className="content-section mb-8 transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color">{section.title}</h2>
          {section.content}
        </div>
      ))}

      {quickLinks.length > 0 && (
        <div className="content-section">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            快速链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="command-list">
                <div className="mb-3 p-3 bg-code-bg rounded-md">
                  <a href={link.href} className="font-medium text-primary hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    {link.text}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="footer mt-10 pt-5 border-t border-border-color text-secondary-color text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>OpenClaw 开源项目 · MIT License · <a href="https://github.com/openclaw/openclaw" className="text-primary hover:underline">GitHub</a></p>
          <p className="mt-2 md:mt-0">现代 AI 助手框架</p>
        </div>
      </div>
    </MainLayout>
  );
}
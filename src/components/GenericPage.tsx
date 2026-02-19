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
      <div className="page-title mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{title}</h1>
        {subtitle && <p className="text-lg text-secondary-color">{subtitle}</p>}
      </div>

      {contentSections.map((section, index) => (
        <div key={index} className="content-section mb-6">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color text-heading">{section.title}</h2>
          {section.content}
        </div>
      ))}

      {quickLinks.length > 0 && (
        <div className="content-section">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border-color text-heading">
            快速链接
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="group p-4 bg-card-bg rounded-xl border border-border-color hover:border-primary hover:shadow-lg-card hover:-translate-y-1 transition-all duration-300">
                <a href={link.href} className="font-medium text-primary hover:text-primary-hover hover:underline block">
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="footer mt-12 pt-6 border-t border-border-color text-secondary-color text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="flex items-center gap-2">
            <span className="text-primary font-bold">OpenClaw</span>
            <span>·</span>
            <span>MIT License</span>
            <span>·</span>
            <a href="https://github.com/openclaw/openclaw" className="text-primary hover:text-primary-hover hover:underline font-medium">GitHub</a>
          </p>
          <p className="mt-2 md:mt-0">现代 AI 助手框架</p>
        </div>
      </div>
    </MainLayout>
  );
}
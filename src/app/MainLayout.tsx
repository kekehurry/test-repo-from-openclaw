import Sidebar from '@/components/Sidebar';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <main className="main-content flex-1 ml-[280px] p-10">
        {children}
      </main>
    </>
  );
}
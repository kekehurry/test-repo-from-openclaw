import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "@fontsource/inter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenClaw - 开源 AI 助手框架",
  description: "开源 AI 助手框架 - 连接大模型与你的数字生活",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container flex min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

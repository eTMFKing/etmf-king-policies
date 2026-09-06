import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { sitePath } from '@/lib/site-path';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'eTMF王种子用户计划｜让临床文件归档更轻松',
  description:
    'eTMF王是一款面向 CRC、CRA 与 TMF 管理者的移动归档工具。通过邮件联系 eTMFKing@qq.com，了解首批种子用户体验计划。',
  icons: {
    icon: sitePath('/app-icon.png'),
    shortcut: sitePath('/app-icon.png'),
    apple: sitePath('/app-icon.png'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

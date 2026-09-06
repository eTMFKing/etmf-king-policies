import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages 项目站点运行在 /etmf-king-policies 子路径；静态路由由 sitePath 统一处理。
  assetPrefix: process.env.GITHUB_PAGES === '1' ? '/etmf-king-policies' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

const githubPagesPrefix = import.meta.env.VITE_GITHUB_PAGES === '1' ? '/etmf-king-policies' : '';

/** 为本地 Sites 根路径和 GitHub Pages 项目子路径生成一致的内部链接。 */
export function sitePath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${githubPagesPrefix}${normalized}` || '/';
}

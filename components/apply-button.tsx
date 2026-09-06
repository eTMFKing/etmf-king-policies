'use client';

import { useEffect, useState, type MouseEvent } from 'react';
import { Check, Copy, Mail } from 'lucide-react';

const MAILTO =
  'mailto:eTMFKing@qq.com?subject=%E7%94%B3%E8%AF%B7%E6%88%90%E4%B8%BAeTMF%E7%8E%8B%E7%A7%8D%E5%AD%90%E7%94%A8%E6%88%B7&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E7%94%B3%E8%AF%B7%E6%88%90%E4%B8%BA%20eTMF%20%E7%8E%8B%E7%A7%8D%E5%AD%90%E7%94%A8%E6%88%B7%E3%80%82%0D%0A%0D%0A%E4%BB%A5%E4%B8%8B%E6%98%AF%E6%88%91%E7%9A%84%E4%BF%A1%E6%81%AF%EF%BC%8C%E6%96%B9%E4%BE%BF%E4%BD%A0%E4%BB%AC%E8%81%94%E7%B3%BB%E6%88%91%E5%B9%B6%E5%AE%89%E6%8E%92%E5%86%85%E6%B5%8B%EF%BC%9A%0D%0A%0D%0A%E6%98%B5%E7%A7%B0%EF%BC%9A%0D%0A%E8%81%8C%E4%B8%9A%EF%BC%88CRA%20%2F%20CRC%20%2F%20%E5%85%B6%E4%BB%96%EF%BC%89%EF%BC%9A%0D%0A%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%EF%BC%88%E5%BE%AE%E4%BF%A1%20%2F%20%E6%89%8B%E6%9C%BA%E5%8F%B7%EF%BC%89%EF%BC%9A%0D%0A%E6%AF%8F%E5%91%A8%E6%96%87%E4%BB%B6%E9%87%8F%EF%BC%88%E7%BA%A6%EF%BC%89%EF%BC%9A%0D%0AiPhone%20%E5%9E%8B%E5%8F%B7%EF%BC%9A%0D%0A%0D%0A%EF%BC%88%E4%BB%A5%E4%B8%8A%E4%BF%A1%E6%81%AF%E4%BB%85%E7%94%A8%E4%BA%8E%E7%A7%8D%E5%AD%90%E7%94%A8%E6%88%B7%E5%86%85%E6%B5%8B%E8%81%94%E7%B3%BB%E4%B8%8E%E6%9C%BA%E5%9E%8B%E9%80%82%E9%85%8D%EF%BC%8C%E4%B8%8D%E4%BC%9A%E7%94%A8%E4%BA%8E%E5%85%B6%E4%BB%96%E7%94%A8%E9%80%94%E3%80%82%EF%BC%89';

export default function ApplyButton({
  className = '',
  label = '发邮件申请体验',
}: {
  className?: string;
  label?: string;
}) {
  const [isWeChat, setIsWeChat] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsWeChat(/micromessenger/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!guideOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [guideOpen]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isWeChat) return;
    event.preventDefault();
    setGuideOpen(true);
  }

  async function copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const area = document.createElement('textarea');
      area.value = url;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <a href={MAILTO} onClick={handleClick} className={className}>
        {label}
        <Mail className="size-5" />
      </a>

      {guideOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80"
          onClick={() => setGuideOpen(false)}
        >
          <div className="absolute right-6 top-4 flex flex-col items-end gap-1 text-white">
            <span className="text-base font-bold">点击右上角 ···</span>
            <svg
              width="52"
              height="72"
              viewBox="0 0 52 72"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M40 8C40 34 32 54 8 62"
                stroke="#b7f34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <path
                d="M8 62V50M8 62H20"
                stroke="#b7f34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            className="rounded-t-[26px] bg-[#0d2136] px-6 pb-9 pt-7 text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-xl font-black">请在浏览器中打开</h3>
            <p className="mt-2.5 text-sm leading-6 text-white/60">
              微信内置浏览器不支持直接唤起邮件，需换用系统浏览器才能带入申请模板。
            </p>

            <ol className="mt-5 space-y-3">
              {[
                '点击右上角 ··· 菜单',
                '选择「在浏览器打开」',
                '再点「发邮件申请体验」，模板已导入',
              ].map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#b7f34a] text-sm font-black text-[#071321]">
                    {index + 1}
                  </span>
                  <span className="text-[15px] leading-6 text-white/90">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <button
              type="button"
              onClick={copyLink}
              className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/20 text-base font-bold text-white/85"
            >
              {copied ? (
                <>
                  链接已复制
                  <Check className="size-5 text-[#b7f34a]" />
                </>
              ) : (
                <>
                  复制页面链接，稍后在浏览器打开
                  <Copy className="size-5" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setGuideOpen(false)}
              className="mt-3 w-full py-3 text-sm font-bold text-white/45"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
}

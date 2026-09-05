import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck2,
  Mail,
  ScanLine,
} from 'lucide-react';
import Image from 'next/image';

const emailHref =
  'mailto:eTMFKing@qq.com?subject=申请成为eTMF王种子用户&body=昵称：%0A职业：%0A联系方式：%0A每周文件量：%0AiPhone型号：';

const featureCards = [
  ['01', '一拍成 PDF', '自动裁切、校正，多页合成清晰 PDF。'],
  ['02', '智能匹配', '从 TMF Index 给出候选，结果由你确认。'],
  ['03', '命名随你定', '按团队习惯定制文件名，找得到，也改得快。'],
];

const steps = [
  ['01', '文件收集', '用 iPhone 扫描，现场完成第一步。'],
  ['02', '确认', '查看识别结果，选择合适的目录候选。'],
  ['03', '保存', '按你的命名规则保存到对应位置。'],
];

export const metadata = {
  title: 'eTMF 王｜极简版种子用户计划',
  description:
    'eTMF 王极简产品风格备选页面，面向 CRA、CRC 及其他 CO 从业者招募种子用户。',
};

export default function AppleStyleAlternative() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="mx-auto min-h-screen max-w-[540px] overflow-hidden bg-[#f5f5f7]">
        <header className="flex items-center justify-between border-b border-[#d2d2d7]/70 px-5 py-4">
          <a
            href="#top"
            className="flex items-center gap-2.5"
            aria-label="eTMF王首页"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-[9px]"
            />
            <span className="text-sm font-semibold tracking-tight">
              eTMF 王
            </span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-sm font-medium text-[#0066cc]"
          >
            联系我们
            <ArrowUpRight className="size-3.5" />
          </a>
        </header>

        <section id="top" className="px-5 pb-16 pt-20 text-center">
          <p className="text-sm font-semibold text-[#6e6e73]">
            首批种子用户计划 · Beta
          </p>
          <h1 className="mt-5 text-balance text-[3.55rem] font-bold leading-[.98] tracking-[-.065em]">
            文件收集，
            <br />
            <span className="text-[#0066cc]">一台 iPhone 就够。</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[390px] text-lg leading-8 text-[#6e6e73]">
            扫描、识别、匹配目录。文件名可以自己定义。现场完成，随时查找。
          </p>
          <a
            href={emailHref}
            className="mx-auto mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0066cc] px-7 text-base font-semibold text-white transition-colors hover:bg-[#0077ed] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#0066cc]/30"
          >
            申请体验
            <ArrowRight className="size-4" />
          </a>
          <p className="mt-4 text-sm text-[#86868b]">限量邀请 · 内测免费</p>

          <div className="mt-16 rounded-[28px] bg-white p-4 text-left shadow-[0_18px_48px_rgba(0,0,0,.08)]">
            <div className="flex items-center justify-between border-b border-[#e5e5e7] px-1 pb-3">
              <span className="flex items-center gap-2 text-sm font-semibold">
                <ScanLine className="size-4 text-[#0066cc]" />
                文件预览
              </span>
              <span className="text-xs font-medium text-[#86868b]">
                SCAN&nbsp; → &nbsp;MATCH&nbsp; → &nbsp;NAME
              </span>
            </div>
            <div className="mt-4 rounded-[20px] bg-[#f5f5f7] p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-[#6e6e73]">
                <span>扫描文件</span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[#0066cc] shadow-sm">
                  Protocol Signature Page
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-24 rounded-full bg-[#a1a1a6]" />
                <div className="h-1.5 w-full rounded-full bg-[#d2d2d7]" />
                <div className="h-1.5 w-10/12 rounded-full bg-[#d2d2d7]" />
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-[20px] bg-[#f0f8e4] p-4">
              <FileCheck2 className="mt-0.5 size-5 shrink-0 text-[#4a7d11]" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#4a7d11]">
                  05.02.02 · 试验方案签字页
                </p>
                <p className="mt-1 break-all font-mono text-[11px] leading-5 text-[#41532c]">
                  Study 001_Site 1001_05.02.02_Protocol Signature
                  Page_v1.0_20250801.pdf
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <p className="text-sm font-semibold text-[#6e6e73]">专注现场收集</p>
          <h2 className="mt-4 text-balance text-[2.65rem] font-bold leading-[1.03] tracking-[-.055em]">
            少一点整理，
            <br />
            多一点现场。
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6e6e73]">
            从扫描到保存，每一步都更短。识别结果由你确认，文件名和命名规则也能按需调整。
          </p>

          <div className="mt-12 divide-y divide-[#e5e5e7]">
            {featureCards.map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 py-6 first:pt-0 last:pb-0"
              >
                <span className="pt-1 text-sm font-semibold text-[#0066cc]">
                  {number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-.02em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#6e6e73]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d1d1f] px-5 py-20 text-white">
          <p className="text-sm font-semibold tracking-[.12em] text-white/55">
            HOW IT WORKS
          </p>
          <h2 className="mt-4 text-[2.7rem] font-bold leading-[1.02] tracking-[-.055em]">
            收集。确认。保存。
          </h2>
          <div className="mt-12 divide-y divide-white/15">
            {steps.map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 py-6 first:pt-0 last:pb-0"
              >
                <span className="pt-1 text-sm font-semibold text-[#b7f34a]">
                  {number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-.02em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-white/60">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-20">
          <p className="text-sm font-semibold text-[#6e6e73]">命名方式</p>
          <h2 className="mt-4 text-balance text-[2.65rem] font-bold leading-[1.03] tracking-[-.055em]">
            每一份文件，
            <br />
            都有清晰去处。
          </h2>
          <p className="mt-5 text-base leading-7 text-[#6e6e73]">
            按试验号、中心号、编号、文件名、版本号和版本日期组合。命名规则可以按你的团队习惯定制。
          </p>
          <div className="mt-8 rounded-[22px] bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,.06)]">
            <p className="break-all font-mono text-xs leading-6 text-[#1d1d1f]">
              Study 001_Site 1001_05.02.02_Protocol Signature
              Page_v1.0_20250801.pdf
            </p>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs text-[#6e6e73]">
            {['试验号', '中心号', '版本日期'].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white px-2 py-3 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#b7f34a] px-5 py-20 text-[#071321]"
        >
          <p className="text-sm font-semibold text-[#294211]">种子用户计划</p>
          <h2 className="mt-4 text-[2.7rem] font-bold leading-[1.02] tracking-[-.055em]">
            一起把下一步做得更好。
          </h2>
          <p className="mt-5 text-base leading-7 text-[#294211]/80">
            如果你每天都在处理试验文件，欢迎把真实的工作路径告诉我们。
          </p>
          <ul className="mt-8 space-y-3">
            {[
              '每天或每周处理试验文件',
              '经常在纸质文件、扫描软件和文件夹间切换',
              '愿意参与产品反馈',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/40 p-4 text-base leading-6"
              >
                <Check className="mt-0.5 size-5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={emailHref}
            className="mt-8 flex items-center justify-between rounded-2xl bg-[#1d1d1f] p-4 text-white transition-colors hover:bg-[#333336] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#0066cc]/40"
          >
            <span className="flex items-center gap-2 text-lg font-semibold">
              <Mail className="size-5 text-[#b7f34a]" />
              发邮件申请体验
            </span>
            <ArrowUpRight className="size-5 text-[#b7f34a]" />
          </a>
          <p className="mt-4 text-center text-xs leading-5 text-[#294211]/75">
            邮件中请提供：昵称、职业、联系方式、每周文件量、iPhone 型号
          </p>
        </section>

        <footer className="flex items-center justify-between bg-[#1d1d1f] px-5 py-6 text-white">
          <div className="flex items-center gap-2.5">
            <Image
              src="/app-icon.png"
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-lg"
            />
            <span className="text-sm font-semibold">eTMF 王</span>
          </div>
          <span className="text-xs text-white/45">Beta 版</span>
        </footer>
      </div>
    </main>
  );
}

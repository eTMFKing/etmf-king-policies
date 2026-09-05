import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Camera,
  Check,
  FileCheck2,
  FileOutput,
  FolderTree,
  Mail,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const steps = [
  ['01', '文件收集', 'iPhone 文档相机自动裁切，多页合成 PDF。'],
  ['02', '确认', 'OCR 提取内容，从 TMF Index 中智能匹配候选。'],
  ['03', '保存', '生成规范文件名，保存到试验 / 中心目录。'],
];

const features = [
  {
    icon: Camera,
    title: '多页扫描成 PDF',
    description:
      '拍摄纸质文件，自动裁切、校正并合成清晰 PDF；已有图片也能导入。',
  },
  {
    icon: BrainCircuit,
    title: 'OCR + 智能匹配',
    description:
      '从 TMF Index 中智能匹配，减少你的工作量；低置信结果由你确认并可手动修改。',
  },
  {
    icon: FileOutput,
    title: '规范文件名',
    description:
      '按试验号、中心号、TMF 编号、文件名、版本号和版本日期组合标准文件名，方便检索。',
  },
  {
    icon: FolderTree,
    title: '三级目录管理',
    description: '以“试验—中心—文档”整理本地文件，支持搜索、预览、编辑与导出。',
  },
];

const fitFor = [
  '每天或每周都要处理试验文件',
  '经常在纸质文件、扫描软件和文件夹间切换',
  '愿意用真实合规流程给产品反馈',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8eff5] text-[#071828]">
      <div className="mx-auto min-h-screen max-w-[540px] overflow-hidden bg-[#071828] shadow-[0_0_80px_rgba(7,24,40,.16)]">
        <header className="flex items-center justify-between px-5 pb-4 pt-5 text-white">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="eTMF王首页"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-[10px]"
            />
            <span className="text-lg font-black tracking-tight">eTMF 王</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-sm font-bold text-[#b7f34a]"
          >
            联系我们
            <ArrowUpRight className="size-4" />
          </a>
        </header>

        <section
          id="top"
          className="relative overflow-hidden px-5 pb-14 pt-12 text-white"
        >
          <div
            className="scan-grid absolute inset-0 opacity-60"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 top-20 size-72 rounded-full bg-[#1b83dc]/30 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="mb-7 flex items-center gap-2.5 text-sm font-bold text-[#8ee7ff]">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-[#8ee7ff]/30 bg-[#8ee7ff]/10">
                <Sparkles className="size-4" />
              </span>
              首批种子用户计划 · 开放中
            </div>
            <h1 className="text-balance text-[3.4rem] font-black leading-[.94] tracking-[-.07em]">
              <span className="block text-[.92em]">优化文件收集</span>
              <span className="mt-2 block text-[.78em] leading-[1.08] text-[#b7f34a]">
                Onsite 时间还给监查
              </span>
              <span className="block text-[.78em] leading-[1.08] text-[#b7f34a]">
                精力留给潜在风险
              </span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-white/68">
              面向 CRC、CRA 与 TMF
              管理者的移动文件收集工具。扫描、识别、匹配目录，再生成规范文件名，一台
              iPhone 就能完成。
            </p>
            <a
              href="mailto:eTMFKing@qq.com?subject=申请成为eTMF王种子用户&body=昵称：%0A职业：%0A联系方式：%0A每周文件量：%0AiPhone型号："
              className="mt-9 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#b7f34a] px-6 text-base font-extrabold text-[#071321] shadow-[0_16px_38px_rgba(183,243,74,.16)] transition-colors hover:bg-[#c8ff5f] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8ee7ff]/50"
            >
              发邮件申请体验
              <Mail className="size-5" />
            </a>
          </div>
        </section>

        <section
          id="product"
          className="rounded-t-[30px] bg-[#f7fafc] px-5 pb-12 pt-10"
        >
          <p className="font-mono text-xs font-bold tracking-[.18em] text-[#0b6fd4]">
            产品概览 / PRODUCT
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-[1.08] tracking-[-.045em]">
            不是又一个扫描 App，
            <br />
            是现场文件收集的下一代工具。
          </h2>
          <p className="mt-5 text-base leading-7 text-[#5d6f82]">
            把扫描、识别、搜索、分类和整理收进一条连续路径。识别结果由你确认，文件名也可以灵活手动修改。
          </p>

          <div className="mt-8 overflow-hidden rounded-[22px] border border-[#d9e3eb] bg-white shadow-[0_14px_38px_rgba(24,54,78,.08)]">
            <div className="flex items-center justify-between border-b border-[#e7edf2] px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-black">
                <ScanLine className="size-4 text-[#0b6fd4]" />
                智能文件收集预览
              </span>
              <span className="font-mono text-[11px] text-[#8090a0]">
                SCAN → MATCH → NAME
              </span>
            </div>
            <div className="grid gap-3 p-4">
              <div className="rounded-2xl bg-[#f1f6fb] p-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#708296]">
                  <span>扫描文件</span>
                  <span className="rounded bg-white px-2 py-1 text-[#0b6fd4]">
                    Protocol Signature Page v1.0
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 w-24 rounded-full bg-[#93a5b5]" />
                  <div className="h-1.5 w-full rounded-full bg-[#d4e0ea]" />
                  <div className="h-1.5 w-10/12 rounded-full bg-[#d4e0ea]" />
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#b7f34a]/35 bg-[#effbdc] p-4">
                <FileCheck2 className="size-6 shrink-0 text-[#4a7d11]" />
                <div>
                  <p className="text-xs font-bold text-[#4a7d11]">
                    05.02.02 · 试验方案签字页
                  </p>
                  <p className="mt-1 break-all font-mono text-[11px] leading-5 text-[#41532c]">
                    Study 001_Site 1001_TMF 05.02.02_Protocol Signature
                    Page_v1.0_20250801.pdf
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 divide-x divide-[#d9e3eb] rounded-2xl border border-[#d9e3eb] bg-white py-4 text-center">
            {[
              ['可定制', 'TMF 目录'],
              ['Top 3', '候选结果'],
              ['3 级', '目录结构'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-xl font-black text-[#0b6fd4]">{value}</p>
                <p className="mt-1 text-xs text-[#6c7c8d]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs leading-5 text-[#6c7c8d]">
            预设目录：TMF Reference Model v3.3.1
          </p>
        </section>

        <section className="bg-[#f7fafc] px-5 pb-14">
          <div className="rounded-[24px] bg-[#0b6fd4] p-5 text-white">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-xs font-bold tracking-[.16em] text-[#b9dcff]">
                  HOW IT WORKS
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-[-.045em]">
                  三步，完成文件收集。
                </h2>
              </div>
              <ArrowRight className="mb-1 size-6 text-[#b7f34a]" />
            </div>
            <div className="mt-8 space-y-6">
              {steps.map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-4 border-t border-white/20 pt-5"
                >
                  <span className="font-mono text-sm font-bold text-[#b7f34a]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-1 text-base leading-6 text-white/68">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#071828] px-5 py-14 text-white">
          <p className="font-mono text-xs font-bold tracking-[.18em] text-[#8ee7ff]">
            核心功能 / FEATURES
          </p>
          <h2 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-.045em]">
            为现场收集文件而生，
            <br />
            也为收集文件的人而生。
          </h2>
          <div className="mt-8 space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-[22px] border border-white/10 bg-white/[.045] p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#8ee7ff]/10 text-[#8ee7ff]">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black">{feature.title}</h3>
                      <p className="mt-2 text-base leading-7 text-white/58">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#b7f34a]/20 bg-[#b7f34a]/8 p-4 text-sm leading-6 text-white/65">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#b7f34a]" />
            扫描的 PDF
            文件仅保存在本地，应用不会上传；低置信结果由用户确认，并可手动修改。
          </div>
        </section>

        <section
          id="program"
          className="bg-[#b7f34a] px-5 py-14 text-[#071321]"
        >
          <p className="font-mono text-xs font-bold tracking-[.18em] text-[#294211]">
            种子计划 / SEED 01
          </p>
          <h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.055em]">
            一起把它做对。
          </h2>
          <p className="mt-5 text-base leading-7 text-[#294211]/78">
            我们优先邀请真正处理临床试验文件的一线用户。你的真实路径、纠错和吐槽，会直接影响产品下一步。
          </p>
          <div className="mt-7 space-y-3">
            {fitFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#35560e]/15 bg-white/35 p-4 text-base leading-6"
              >
                <Check className="mt-0.5 size-5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#071321] p-4 text-sm leading-6 text-white/78">
            <Users className="mt-0.5 size-5 shrink-0 text-[#b7f34a]" />
            <span>
              内测期间免费体验，报名后分批邀请；它不只是扫描软件，也帮助你更高效完成文件收集与整理。
            </span>
          </div>
        </section>

        <section id="contact" className="bg-[#f7fafc] px-5 py-14">
          <div className="rounded-[24px] bg-[#102c48] p-6 text-white">
            <p className="font-mono text-xs font-bold tracking-[.18em] text-[#8ee7ff]">
              CONTACT / 联系方式
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.045em]">
              想参与，发一封邮件就好。
            </h2>
            <p className="mt-4 text-base leading-7 text-white/62">
              请在邮件中提供以下信息，方便我们联系你：
            </p>
            <ul className="mt-5 space-y-3 text-base leading-6 text-white/78">
              {['昵称', '职业', '联系方式', '每周文件量', 'iPhone 型号'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#b7f34a]" />
                    {item}
                  </li>
                ),
              )}
            </ul>
            <a
              href="mailto:eTMFKing@qq.com"
              className="mt-8 flex items-center justify-between rounded-2xl bg-[#b7f34a] p-4 text-[#071321] transition-colors hover:bg-[#c8ff5f] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8ee7ff]/50"
            >
              <span className="text-lg font-black">eTMFKing@qq.com</span>
              <ArrowUpRight className="size-5" />
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-white/38">
              请勿在邮件中发送患者信息、试验原始文件或账号密码。
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-white/10 bg-[#071828] px-5 py-7 text-white">
          <div className="flex items-center gap-2.5">
            <Image
              src="/app-icon.png"
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-lg"
            />
            <span className="text-sm font-black">eTMF 王</span>
          </div>
          <span className="text-xs text-white/35">
            临床试验文件 · 智能扫描收集
          </span>
        </footer>
      </div>
    </main>
  );
}

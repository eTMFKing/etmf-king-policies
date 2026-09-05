import {
  ArrowRight,
  BrainCircuit,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  FileOutput,
  FileCheck2,
  FolderTree,
  Gift,
  MessageCircle,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SeedApplicationForm } from '@/components/seed-application-form';

const features = [
  {
    icon: Camera,
    index: '01',
    title: '多页扫描成 PDF',
    description:
      '直接调用 iPhone 文档相机，自动裁切、校正并合成多页 PDF；已有图片也可从相册导入。',
  },
  {
    icon: BrainCircuit,
    index: '02',
    title: 'OCR + 智能匹配',
    description:
      '在设备端识别文件内容，从 250 项 TMF 目录中给出 Top 3 候选；不把低置信结果强行替你决定。',
  },
  {
    icon: FileOutput,
    index: '03',
    title: '生成规范文件名',
    description:
      '根据试验、中心、目录号、文档类型、版本与日期组合文件名，减少手工复制和格式偏差。',
  },
  {
    icon: FolderTree,
    index: '04',
    title: '按试验与中心管理',
    description:
      '以“试验—中心—文档”三级目录整理本地文件，支持搜索、预览、编辑和批量导出。',
  },
];

const faqs = [
  {
    question: '目前支持哪些设备？',
    answer:
      '本轮种子测试面向 iPhone 用户。安装与账号开通方式会在入选后单独发送。',
  },
  {
    question: '它会替代现有 eTMF 系统吗？',
    answer:
      '不会。eTMF王聚焦现场文件的扫描、初步分类、命名和整理，帮助你把文件准备得更规范；最终归档和质量判断仍应遵循所在机构的 SOP 与正式系统流程。',
  },
  {
    question: '文件和识别内容会上传吗？',
    answer:
      '试验原始 PDF 不通过本报名网站上传。App 的扫描与 OCR 主要在设备端完成；只有经授权参与改进计划的测试账号，才会按产品内说明回传必要的识别样本信息。',
  },
  {
    question: '报名后多久能收到邀请？',
    answer:
      '我们会结合角色、文件处理频率和当前测试场景分批邀请。匹配后会通过你留下的联系方式发送说明；报名本身不代表自动入选。',
  },
  {
    question: '种子用户需要做什么？',
    answer:
      '用真实但合规的日常流程体验产品，标记不准确或不好用的地方，并在方便时参加简短访谈。请勿在报名表中填写任何患者信息或试验敏感内容。',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 border-b border-white/10 bg-hero text-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="eTMF王首页"
          >
            <Image
              src="/app-icon.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,.2)]"
            />
            <span className="text-xl font-black tracking-tight">eTMF 王</span>
            <span className="rounded-full border border-[#8ee7ff]/35 bg-[#8ee7ff]/10 px-2.5 py-1 text-[11px] font-bold tracking-[.12em] text-[#8ee7ff]">
              SEED 01
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm text-white/70 md:flex"
            aria-label="主导航"
          >
            <a className="transition-colors hover:text-white" href="#product">
              产品概览
            </a>
            <a className="transition-colors hover:text-white" href="#features">
              核心功能
            </a>
            <a className="transition-colors hover:text-white" href="#program">
              种子计划
            </a>
          </nav>

          <a
            href="#apply"
            className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#b7f34a] px-5 text-sm font-bold text-[#071321] transition-colors hover:bg-[#c8ff5f] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8ee7ff]/50"
          >
            申请体验
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative bg-hero text-white">
        <div
          className="scan-grid absolute inset-0 opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute -left-32 top-16 size-[430px] rounded-full bg-[#126ed6]/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-10rem] top-[-8rem] size-[480px] rounded-full bg-[#23b7d9]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-14 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3 text-sm font-semibold text-[#8ee7ff]">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-[#8ee7ff]/35 bg-[#8ee7ff]/10">
                <Sparkles className="size-4" />
              </span>
              eTMF 王首批种子用户计划开放中
            </div>

            <h1 className="text-balance text-[clamp(3.35rem,7vw,7.2rem)] font-black leading-[.9] tracking-[-.075em]">
              把归档时间
              <br />
              <span className="text-[#b7f34a]">还给临床现场。</span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-white/68 sm:text-xl">
              面向 CRC、CRA 与 TMF
              管理者的移动归档工具。扫描文件，识别内容，匹配 TMF
              目录并生成规范文件名——在一台 iPhone 上完成。
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#b7f34a] px-7 text-base font-extrabold text-[#071321] shadow-[0_15px_40px_rgba(183,243,74,.18)] transition-colors hover:bg-[#c8ff5f] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8ee7ff]/50"
              >
                加入首批体验
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#product"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8ee7ff]/50"
              >
                看看它如何工作
                <ChevronDown className="size-5" />
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/55">
              {['首批免费体验', '由真实用户共同打磨', '不上传试验原始文件'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-[#b7f34a]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:mx-0 lg:ml-auto">
            <div
              className="scanner-brackets absolute -inset-4 sm:-inset-7"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-[28px] border border-white/12 bg-[#0b1f35]/90 shadow-[0_45px_120px_rgba(0,0,0,.4)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="size-2.5 rounded-full bg-[#b7f34a] shadow-[0_0_0_5px_rgba(183,243,74,.1)]" />
                  <span className="text-sm font-bold">智能归档预览</span>
                </div>
                <span className="font-mono text-xs text-white/38">
                  SCAN · MATCH · NAME
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch sm:p-6">
                <div className="rounded-2xl bg-white p-5 text-[#111b27]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[.12em] text-[#718096]">
                      扫描文件
                    </span>
                    <ScanLine className="size-5 text-[#0b6fd4]" />
                  </div>
                  <div className="rounded-xl border border-[#d9e2ec] bg-[#f6f8fb] p-4">
                    <div className="mb-4 h-2 w-20 rounded-full bg-[#9aa9b8]" />
                    <div className="space-y-2.5">
                      <div className="h-1.5 w-full rounded-full bg-[#dbe3eb]" />
                      <div className="h-1.5 w-10/12 rounded-full bg-[#dbe3eb]" />
                      <div className="h-1.5 w-11/12 rounded-full bg-[#dbe3eb]" />
                    </div>
                    <div className="mt-6 inline-flex rounded-md bg-[#e8f1fe] px-2 py-1 text-[10px] font-bold text-[#0b6fd4]">
                      Protocol Signature Page
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center text-[#8ee7ff]">
                  <ArrowRight className="size-5 rotate-90 sm:rotate-0" />
                </div>

                <div className="rounded-2xl border border-[#2a4866] bg-[#102c48] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[.12em] text-[#8aa5bf]">
                      匹配结果
                    </span>
                    <FileCheck2 className="size-5 text-[#b7f34a]" />
                  </div>
                  <p className="font-mono text-xs text-[#8ee7ff]">01.01.02</p>
                  <p className="mt-2 text-lg font-extrabold">
                    已签署的试验方案
                  </p>
                  <div className="mt-5 rounded-xl border border-[#b7f34a]/20 bg-[#b7f34a]/8 p-3">
                    <p className="text-[10px] font-bold tracking-[.12em] text-[#b7f34a]">
                      规范文件名
                    </p>
                    <p className="mt-2 break-all font-mono text-xs leading-5 text-white/65">
                      CN001_01.01.02_Protocol_v2.0_20260905.pdf
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t border-white/10 text-center">
                {[
                  ['250 项', 'TMF 目录'],
                  ['Top 3', '智能候选'],
                  ['本地', 'OCR 识别'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-r border-white/10 px-2 py-4 last:border-r-0"
                  >
                    <p className="text-lg font-black text-[#8ee7ff]">{value}</p>
                    <p className="mt-1 text-[11px] text-white/42">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div>
              <p className="section-kicker">产品概览 / PRODUCT</p>
              <h2 className="mt-5 text-balance text-4xl font-black leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                从纸张到可归档文件，少一点来回切换。
              </h2>
            </div>
            <div className="lg:pt-11">
              <p className="max-w-3xl text-xl leading-9 text-[#506276] sm:text-2xl sm:leading-10">
                现场归档真正耗时的，往往不是按下快门，而是之后的辨认、查目录、改文件名和重新整理。eTMF王把这条碎片化流程收进一个移动端工作台。
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#d7e1ea] bg-[#d7e1ea] sm:grid-cols-4">
                {[
                  ['250', 'TMF 目录项'],
                  ['Top 3', '匹配候选'],
                  ['3 级', '目录结构'],
                  ['2 种', '中英文命名'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-white px-5 py-6">
                    <p className="text-2xl font-black tracking-tight text-[#0b6fd4]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-[#68798a]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 lg:grid-cols-3">
            {[
              {
                number: '01',
                title: '扫描',
                description: '用 iPhone 拍摄纸质文件，自动裁切并生成清晰 PDF。',
                accent: 'bg-[#0b6fd4] text-white',
              },
              {
                number: '02',
                title: '确认',
                description:
                  '查看 OCR 提取结果与 Top 3 分类候选，由你做最终确认。',
                accent: 'bg-[#8ee7ff] text-[#071321]',
              },
              {
                number: '03',
                title: '归档',
                description:
                  '生成规范文件名，保存到试验 / 中心目录并按需导出。',
                accent: 'bg-[#b7f34a] text-[#071321]',
              },
            ].map((step) => (
              <article
                key={step.number}
                className={`${step.accent} group min-h-[300px] rounded-[26px] p-7 sm:p-9`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-bold opacity-60">
                    STEP {step.number}
                  </span>
                  <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-16 text-5xl font-black tracking-[-.05em]">
                  {step.title}
                </p>
                <p className="mt-5 max-w-sm text-base leading-7 opacity-75">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7e1ea] bg-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="flex min-h-[560px] flex-col justify-between bg-[#0b6fd4] p-7 text-white sm:p-12 lg:p-16">
            <span className="font-mono text-xs font-bold tracking-[.18em] text-[#b9dcff]">
              WHY NOW / 真实现场
            </span>
            <blockquote className="mt-20 text-balance text-4xl font-black leading-[1.12] tracking-[-.045em] sm:text-5xl">
              “文件已经扫完了，真正费时间的工作才刚刚开始。”
            </blockquote>
            <p className="mt-10 max-w-xl text-lg leading-8 text-white/70">
              归档不是单一动作。工具应该理解临床文件的上下文，而不是只留下另一张等待整理的扫描件。
            </p>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <p className="section-kicker">常见断点</p>
            <div className="mt-7 divide-y divide-[#dce5ed] border-y border-[#dce5ed]">
              {[
                ['反复查找', '在表格、参考模型和聊天记录间确认 TMF 目录号'],
                ['重复命名', '手工拼接试验号、中心号、版本与日期'],
                ['事后整理', '文件先堆在相册或下载目录，之后再花时间归位'],
                ['难以反馈', '分类错在哪里、为什么错，通常没有顺手的反馈入口'],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="grid gap-3 py-6 sm:grid-cols-[52px_150px_1fr] sm:items-start"
                >
                  <span className="font-mono text-xs font-bold text-[#0b6fd4]">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="text-base leading-7 text-[#647588]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#071828] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs font-bold tracking-[.18em] text-[#8ee7ff]">
                核心功能 / FEATURES
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black leading-[1.08] tracking-[-.045em] sm:text-6xl">
                为文件而生，
                <br />
                也为做文件的人而生。
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/58">
              智能结果始终给人留出确认空间。eTMF王帮助减少机械步骤，但不替代你的专业判断和机构
              SOP。
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.index}
                  className="group min-h-[320px] bg-[#0a1e33] p-7 transition-colors hover:bg-[#0d2843] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-[#8ee7ff]/20 bg-[#8ee7ff]/8 text-[#8ee7ff]">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-sm font-bold text-white/25">
                      {feature.index}
                    </span>
                  </div>
                  <h3 className="mt-16 text-2xl font-black tracking-tight sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/56">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[#b7f34a]/20 bg-[#b7f34a]/8 px-6 py-5">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <ShieldCheck className="size-5 text-[#b7f34a]" />
              试验原始文件保留在设备本地；分类不确定时由用户确认，不做黑箱自动归档。
            </div>
            <span className="font-mono text-xs font-bold tracking-[.12em] text-[#b7f34a]">
              HUMAN IN THE LOOP
            </span>
          </div>
        </div>
      </section>

      <section
        id="program"
        className="bg-[#b7f34a] py-24 text-[#071321] sm:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
            <div>
              <p className="font-mono text-xs font-bold tracking-[.18em] text-[#294211]">
                种子计划 / SEED 01
              </p>
              <h2 className="mt-5 text-balance text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-7xl">
                不是围观，
                <br />
                是一起把它做对。
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#294211]/75">
                我们优先邀请真正处理临床试验文件的一线用户。你的实际路径、纠错和吐槽，会直接帮助我们决定下一步做什么。
              </p>
              <a
                href="#apply"
                className="mt-9 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#071321] px-7 text-base font-extrabold text-white transition-colors hover:bg-[#102c48] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#071321]/30"
              >
                填写体验申请
                <ArrowRight className="size-5" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Gift,
                  title: '你会获得',
                  items: [
                    '内测期间免费体验',
                    '直接反馈给产品团队',
                    '优先参与新功能共创',
                  ],
                },
                {
                  icon: MessageCircle,
                  title: '希望你愿意',
                  items: [
                    '用于真实合规的日常流程',
                    '标记分类或命名问题',
                    '参与一次简短访谈',
                  ],
                },
                {
                  icon: Users,
                  title: '优先匹配',
                  items: [
                    'CRC / CRA / TMF / QA',
                    '经常处理纸质或扫描文件',
                    '当前主要使用 iPhone',
                  ],
                },
                {
                  icon: ShieldCheck,
                  title: '明确边界',
                  items: [
                    '不是患者招募',
                    '不上传患者或敏感信息',
                    '不替代正式 eTMF 与 SOP',
                  ],
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-[24px] border border-[#35560e]/15 bg-white/38 p-6 backdrop-blur-sm sm:p-7"
                  >
                    <Icon className="size-7" />
                    <h3 className="mt-9 text-xl font-black">{card.title}</h3>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-[#294211]/80">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="section-kicker">常见问题 / FAQ</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl">
              申请前，
              <br />
              你可能想知道。
            </h2>
          </div>
          <Accordion className="border-t border-[#ccd8e2]">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-[#ccd8e2]"
              >
                <AccordionTrigger className="py-6 text-lg font-black hover:no-underline">
                  <span className="flex items-start gap-5">
                    <span className="font-mono text-xs font-bold text-[#0b6fd4]">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-10 pr-3 text-base leading-7 text-[#5d6f82]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-6 bg-[#071828] py-20 text-white sm:py-28"
      >
        <div className="mx-auto grid max-w-[1320px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-10">
            <p className="font-mono text-xs font-bold tracking-[.18em] text-[#8ee7ff]">
              现在申请 / APPLY
            </p>
            <h2 className="mt-5 text-balance text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">
              让真实工作流，决定产品下一步。
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              我们会根据角色、文件量和使用场景分批邀请。没有“标准答案”，越具体的日常困扰越有帮助。
            </p>
            <div className="mt-10 space-y-4 text-sm text-white/58">
              {[
                '只收集完成筛选与联系所需的最少信息',
                '不会在报名页要求上传试验文件',
                '可随时拒绝后续访谈或停止体验',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#b7f34a]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <SeedApplicationForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#071828] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
          <div className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-[10px]"
            />
            <span className="font-black">eTMF 王</span>
            <span className="text-sm text-white/35">
              临床试验文件 · 智能扫描归档
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
            <a href="#product" className="hover:text-white">
              产品概览
            </a>
            <a href="#features" className="hover:text-white">
              核心功能
            </a>
            <a href="#program" className="hover:text-white">
              种子计划
            </a>
            <a href="#apply" className="hover:text-white">
              申请体验
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

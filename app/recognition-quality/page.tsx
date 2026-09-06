import Link from 'next/link';
import { sitePath } from '@/lib/site-path';

export const dynamic = 'force-static';

const contactEmail = 'eTMFKing@qq.com';

export default function RecognitionQualityPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] px-5 py-10 text-[#102c48]">
      <article className="mx-auto max-w-3xl rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
        <Link href={sitePath('/')} className="text-sm font-bold text-[#356b16]">← 返回 eTMF 王</Link>
        <p className="mt-8 font-mono text-xs font-bold tracking-[.18em] text-[#356b16]">QUALITY / 识别质量改进计划</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-.04em]">识别质量改进计划</h1>
        <p className="mt-3 text-sm leading-6 text-[#102c48]/60">最后更新：2026 年 9 月 6 日 · 参加前请完整阅读</p>

        <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#102c48]/82">
          <section>
            <h2 className="text-lg font-black text-[#102c48]">这是什么计划？</h2>
            <p className="mt-2">这是一个可选的识别质量改进计划，用于帮助我们改进 OCR、文件分类和命名建议。该计划与<Link className="font-bold text-[#356b16] underline" href={sitePath('/terms')}>《用户协议》</Link>和<Link className="font-bold text-[#356b16] underline" href={sitePath('/privacy')}>《隐私政策》</Link>分开，是否参加完全由你自主决定。</p>
            <p className="mt-2">只有在你明确点击“参加计划”并完成授权后，App 才会生成用于本计划的识别样本；样本将在登录、服务器开关和网络等条件满足时上传。未授权前不会生成或上传本计划样本。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">可能提供哪些信息？</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>OCR 识别出的文字、命中词、候选分类和置信度。</li>
              <li>用户最终确认结果、是否改选以及修改前的分类结果。</li>
              <li>Study、Site、文档类型、TMF 编号、文档名称、版本、日期和页数等文件元数据。</li>
              <li>本地文件 ID、采集时间、App 版本，以及与账号关联的内部 UID。</li>
            </ul>
            <p className="mt-2">以上信息仅用于识别质量分析、错误排查和产品改进，不用于广告、出售或识别个人身份。</p>
            <p className="mt-2 font-semibold">PDF 原文件只保存在本机，不会作为识别样本上传。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">谁可以查阅？保留多久？</h2>
            <p className="mt-2">识别样本仅由 eTMF 王开发团队中经授权的人员，在必要范围内用于质量分析、错误排查和产品改进。相关查询、处理和导出操作会受到权限控制并记录审计日志。</p>
            <p className="mt-2">OCR 原文和命中词自采集之日起保留 90 天，之后自动清理。其他未聚合的样本元数据和识别结果最长保留 365 天，期满后删除或转化为无法关联账号和具体样本的汇总统计。个人信息和识别质量改进样本仅在中国大陆境内处理和存储，不向境外提供或传输。</p>
            <p className="mt-2">PDF 原文件不会进入识别质量改进计划，也不会通过管理后台下载。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">你的选择</h2>
            <p className="mt-2">参加本计划完全自愿。选择“暂不参加”或之后撤回，不影响扫描、OCR、本地 PDF 保存和文件元数据同步等核心功能。</p>
            <p className="mt-2">撤回后，我们会停止生成和上传新的识别样本，并清理设备上尚未上传的待处理样本。已经上传的样本不会因撤回自动立即删除，会按照本计划说明中的保存期限处理；如需提前删除，可以联系 eTMF 王开发团队提出申请。你可以在之后重新打开本说明并再次明确授权参加计划。注销账号时，相关账号资料、文件元数据和识别样本将按照<Link className="font-bold text-[#356b16] underline" href={sitePath('/privacy')}>《隐私政策》</Link>处理。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">授权记录和说明更新</h2>
            <p className="mt-2">当你参加或撤回本计划时，我们会记录你的账号内部 UID、授权状态、授权版本和操作时间，用于确认授权范围、执行撤回和处理删除请求。</p>
            <p className="mt-2">如果采集字段、使用目的、查阅范围、服务商或保存期限发生重大变化，我们会更新本计划说明并在必要时重新征得你的明确同意。新的授权不会自动追溯适用于此前已经收集的样本。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">内测提示</h2>
            <p className="mt-2">本计划处于测试阶段。为降低资料泄露风险，测试阶段建议使用合成、脱敏或去标识化文件，不要上传不适合用于质量改进的原始资料。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">需要帮助？</h2>
            <p className="mt-2">如需了解本计划的范围、撤回当前授权、删除已上传识别样本、注销账号或反馈安全问题，请联系 eTMF 王开发团队：<a className="font-bold text-[#356b16] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>。为保护账号安全，我们可能要求进行必要的身份核验。</p>
          </section>
        </div>

        <nav className="mt-10 flex flex-wrap gap-4 border-t border-[#102c48]/10 pt-5 text-sm font-bold text-[#356b16]">
          <Link href={sitePath('/privacy')}>隐私政策</Link>
          <Link href={sitePath('/terms')}>用户协议</Link>
        </nav>
      </article>
    </main>
  );
}

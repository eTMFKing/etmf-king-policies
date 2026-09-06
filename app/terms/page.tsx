import Link from 'next/link';
import { sitePath } from '@/lib/site-path';

export const dynamic = 'force-static';

const contactEmail = 'eTMFKing@qq.com';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] px-5 py-10 text-[#102c48]">
      <article className="mx-auto max-w-3xl rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
        <Link href={sitePath('/')} className="text-sm font-bold text-[#356b16]">← 返回 eTMF 王</Link>
        <p className="mt-8 font-mono text-xs font-bold tracking-[.18em] text-[#356b16]">TERMS / 用户协议</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-.04em]">eTMF 王用户协议</h1>
        <p className="mt-3 text-sm leading-6 text-[#102c48]/60">最后更新：2026 年 9 月 6 日 · 种子用户测试版</p>

        <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#102c48]/82">
          <section>
            <h2 className="text-lg font-black text-[#102c48]">一、协议接受</h2>
            <p className="mt-2">注册或首次使用 eTMF 王前，请主动勾选并同意本协议和<Link className="font-bold text-[#356b16] underline" href={sitePath('/privacy')}>隐私政策</Link>。识别质量改进计划属于可选功能，需另行阅读并明确授权，相关说明见<Link className="font-bold text-[#356b16] underline" href={sitePath('/recognition-quality')}>《识别质量改进计划》</Link>。</p>
            <p className="mt-2">不同意本协议或隐私政策的，无法使用需要账号或个人信息处理的相关功能；不同意可选的识别质量改进计划，不影响扫描、OCR、本地保存和文件元数据同步等核心功能。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">二、服务边界</h2>
            <p className="mt-2">eTMF 王提供项目资料的扫描、OCR 文字识别、文件分类、命名和整理等辅助功能，主要用于提高资料管理效率。本服务不构成医疗诊断、治疗建议、临床试验决策、统计结论或监管合规意见。</p>
            <p className="mt-2">OCR、分类和命名结果可能存在遗漏或错误。用户应结合原始文件及所在项目的正式流程进行复核，并对最终使用结果负责。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">三、用户责任</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>eTMF 王主要用于项目资料的整理。你仅可上传因工作或项目需要而有权处理的资料，并遵守所在机构、项目及适用法律的保密和数据安全要求。</li>
              <li>不得上传未经合法授权、未经适当脱敏或与项目无关的患者身份信息、病历、健康状况等医疗隐私资料；种子用户测试期间，原则上应使用合成、脱敏或去标识化文件。</li>
              <li>妥善保管账号和登录凭证，不得共享账号、绕过安全限制，或利用本服务处理违法、侵害他人权益的内容。</li>
              <li>发现错误分类、异常或安全问题时，及时联系 {contactEmail}。</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">四、测试版说明</h2>
            <p className="mt-2">当前服务处于种子用户测试阶段，功能、界面和识别效果可能持续调整，也可能出现暂时中断、运行异常或识别错误。对于重要的项目资料，用户应保留原始文件和独立备份，不应将 eTMF 王作为唯一存储位置或唯一判断依据。</p>
            <p className="mt-2">我们会采取合理的安全措施，但测试版不承诺服务始终连续或所有功能均无错误。本条不影响我们依法承担的个人信息保护、数据安全和其他法定义务。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">五、知识产权与反馈</h2>
            <p className="mt-2">eTMF 王的软件、界面、商标、技术文档、产品结构及运营者提供的分类规则等知识产权，归运营者或相关权利人所有。</p>
            <p className="mt-2">你上传或处理的项目资料及其中原有的知识产权、保密权益，仍归你或其他有权利人所有。我们不会因提供服务而取得该等资料的所有权，仅在提供服务、维护系统和保障安全所必需的范围内进行处理。</p>
            <p className="mt-2">你提交的意见、建议和错误报告可以用于产品改进，但不应包含你无权披露的项目资料、患者隐私或其他保密信息。识别质量改进样本仅在你单独、明确授权后，按照<Link className="font-bold text-[#356b16] underline" href={sitePath('/recognition-quality')}>《识别质量改进计划》</Link>和<Link className="font-bold text-[#356b16] underline" href={sitePath('/privacy')}>隐私政策</Link>处理。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">六、账号注销和服务终止</h2>
            <p className="mt-2">你可以通过 App 内的账号设置申请注销账号；如因无法登录等原因无法操作，也可以通过客服邮箱提出注销申请。账号注销后，我们将按照<Link className="font-bold text-[#356b16] underline" href={sitePath('/privacy')}>隐私政策</Link>停止处理并删除或匿名化相关个人信息，法律法规要求继续保存的资料除外。</p>
            <p className="mt-2">如你违反法律法规、本协议或影响系统安全，我们可以采取限制或暂停相关功能等措施；在条件允许时，会向你说明原因。因安全、法律要求或服务停止而终止服务的，我们会按照适用规则进行通知。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">七、协议更新</h2>
            <p className="mt-2">我们可能根据法律法规、产品功能或服务变化更新本协议，并在本页面标注更新日期。对于不影响用户主要权利义务的调整，我们会公布更新后的协议；对于涉及服务范围、个人信息处理方式、用户重要义务或责任的重要变更，我们会通过 App 内提示、页面提示或其他合理方式通知你。法律要求重新取得同意的，我们会重新征得你的同意。</p>
            <p className="mt-2">如果你不同意变更内容，可以停止使用相关服务、注销账号，或停止参加可选的识别质量改进计划。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">八、适用法律和争议解决</h2>
            <p className="mt-2">本协议适用中华人民共和国大陆地区法律。因本协议或使用 eTMF 王服务产生的争议，双方应先通过客服渠道友好协商解决；协商不成的，任何一方可以向有管辖权的人民法院提起诉讼。本条不排除或限制你依法享有的消费者权益及其他法定权利。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">九、联系我们</h2>
            <p className="mt-2">运营者：eTMF 王开发团队。你可以通过 <a className="font-bold text-[#356b16] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a> 咨询协议、隐私、注销、删除或撤回可选授权等事项。我们会在合理期限内处理相关请求。</p>
          </section>
        </div>

        <nav className="mt-10 flex flex-wrap gap-4 border-t border-[#102c48]/10 pt-5 text-sm font-bold text-[#356b16]">
          <Link href={sitePath('/privacy')}>隐私政策</Link>
          <Link href={sitePath('/recognition-quality')}>识别质量改进计划</Link>
        </nav>
      </article>
    </main>
  );
}

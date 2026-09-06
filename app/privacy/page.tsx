import Link from 'next/link';
import { sitePath } from '@/lib/site-path';

export const dynamic = 'force-static';

const contactEmail = 'eTMFKing@qq.com';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] px-5 py-10 text-[#102c48]">
      <article className="mx-auto max-w-3xl rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
        <Link href={sitePath('/')} className="text-sm font-bold text-[#356b16]">← 返回 eTMF 王</Link>
        <p className="mt-8 font-mono text-xs font-bold tracking-[.18em] text-[#356b16]">PRIVACY / 隐私政策</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-.04em]">eTMF 王隐私政策</h1>
        <p className="mt-3 text-sm leading-6 text-[#102c48]/60">最后更新：2026 年 9 月 6 日 · 种子用户测试版</p>

        <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#102c48]/82">
          <section>
            <h2 className="text-lg font-black text-[#102c48]">一、适用范围与主体</h2>
            <p className="mt-2">本政策适用于 eTMF 王 iOS 应用、种子用户服务和配套管理后台。本服务当前由 eTMF 王开发团队提供和维护；正式发布前，运营者的真实身份和联系方式将进一步补充。</p>
            <p className="mt-2">本政策中的“我们”指 eTMF 王开发团队，“你”或“用户”指使用 eTMF 王的个人。我们将按照本政策及适用的中国法律法规处理你的个人信息。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">二、我们处理的信息</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>账号和登录信息：手机号、账号 UID、昵称、职位、公司信息、密码验证相关信息、登录会话信息，以及识别质量改进计划的授权状态、授权版本和授权时间。</li>
              <li>文件索引和元数据：文件 ID、Study、Site、文件名称、TMF 编号、版本、文件大小、扫描日期、文档日期及是否为 Study 层级文件。</li>
              <li>可选的识别质量改进样本：在你单独同意后，可能上传 OCR 文字、命中词、候选分类、置信度、最终分类结果、用户修正情况、页数、文档相关字段、采集时间和 App 版本等。样本会与账号内部 UID 关联，用于区分样本来源和处理删除请求。</li>
              <li>安全和审计信息：登录或失败登录记录、IP 地址、设备标识、操作时间、会话吊销和安全审计事件。</li>
            </ul>
            <p className="mt-2">扫描得到的 PDF 原文件和主要 OCR 处理保存在用户设备，不作为识别质量改进计划样本上传。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">三、使用目的与查阅范围</h2>
            <p className="mt-2">我们处理账号和登录信息，用于账号注册、登录验证、会话管理、安全防护和账号注销；处理文件索引和元数据，用于文件整理、分类、命名、同步、查询和统计。OCR 和智能分类主要在用户设备上完成，只有你单独同意参加识别质量改进计划后，相关样本字段才可能上传。</p>
            <p className="mt-2">识别质量改进样本仅用于 OCR 和文件分类效果评估、错误分析及产品质量改进，不用于广告、出售或识别个人身份。</p>
            <p className="mt-2">在必要且授权的范围内，受控管理员可以查询识别样本、文件元数据和运营统计，并可能进行受控导出；相关访问和导出操作会记录审计日志。管理员不通过该后台下载用户设备上的 PDF 原文件。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">四、保留期限</h2>
            <p className="mt-2">OCR 原文和命中词自采集之日起保留 90 天，之后自动清理。90 天后，仅在产品质量分析确有必要的范围内保留去除 OCR 原文后的统计或样本字段；其他未聚合的样本元数据和识别结果最长保留 365 天，期满后删除或转化为无法关联账号和具体样本的汇总统计。</p>
            <p className="mt-2">文件索引和元数据在账号存续期间用于提供同步和整理功能；账号注销后删除。账号注销时，安全审计记录会去除账号、手机号、IP、设备等身份关联信息，仅保留必要的匿名事件记录并按安全审计保存期限定期清理。系统备份、缓存和临时队列也应按照相应删除周期处理。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">五、用户选择与删除</h2>
            <p className="mt-2">参加识别质量改进计划完全自愿。拒绝参加不会影响扫描、OCR、本地保存和文件元数据同步等核心功能。你可以在 App 设置中撤回授权；撤回后，我们将停止生成和上传新的识别质量改进样本，并清理设备上尚未上传的待处理样本。撤回授权不会自动删除已经上传的样本；如需删除已上传样本，可以通过客服邮箱提出申请，或直接注销账号。</p>
            <p className="mt-2">你可以依法请求查阅、复制、更正、补充、删除个人信息，限制或拒绝部分处理，撤回可选授权，或注销账号。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">六、安全措施</h2>
            <p className="mt-2">我们会根据所处理信息的类型和风险，采取合理的安全措施，包括 HTTPS 加密传输、密码安全存储、会话吊销、访问控制、管理员最小权限、操作审计和数据保留期限管理等。具体安全措施会根据系统和服务变化持续调整。</p>
            <p className="mt-2">任何网络传输或电子存储都不能保证绝对安全。如发生个人信息安全事件，我们会依法采取补救措施，并在适用法律要求的范围内通知相关用户和监管部门。请勿通过邮件、客服反馈或其他公开渠道发送账号密码、验证码、患者身份信息或未经适当脱敏的项目原始文件。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">七、用户资料处理和敏感个人信息保护</h2>
            <p className="mt-2">eTMF 王主要用于项目资料的扫描、整理和分类，不以收集与服务目的无关的个人信息为目的。用户应仅上传自己有权处理且与项目相关的资料，并遵守适用的保密和数据安全要求。</p>
            <p className="mt-2">种子用户测试和可选的识别质量改进计划，原则上应使用合成、脱敏或去标识化资料。对于资料中可能包含的个人信息，用户应确保具有相应授权，并采取必要的最小化和保护措施。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">八、设备权限和本地处理</h2>
            <p className="mt-2">为提供扫描和导入功能，App 可能申请相机和照片/文件选择权限。相机权限用于扫描项目资料，照片或文件选择权限用于导入已有文件。你可以拒绝或之后在系统设置中关闭相关权限，关闭后不影响与该权限无关的功能。</p>
            <p className="mt-2">扫描得到的 PDF 原文件和主要 OCR 处理在用户设备上完成，不会因为授予相机或照片权限而自动上传。只有你单独同意参加识别质量改进计划后，符合说明范围的样本字段才可能上传。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">九、第三方服务和存储地域</h2>
            <p className="mt-2">为提供账号登录、短信验证、服务器运行、数据库、缓存、网络安全和故障排查等服务，我们可能委托实际使用的云服务商、短信服务商及基础设施服务商处理必要的信息。我们会要求相关服务商按照适用法律和约定处理个人信息，不会出售用户个人信息。</p>
            <p className="mt-2">当前及已确定的后续版本中，个人信息和识别质量改进样本仅在中国大陆境内处理和存储，不向境外提供或传输。如未来处理方式发生变化，我们会依法更新本政策并履行相应告知和同意程序。扫描得到的 PDF 原文件不会上传至上述服务商。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">十、联系我们</h2>
            <p className="mt-2">运营者：eTMF 王开发团队。如需咨询个人信息处理情况，或申请查阅、复制、更正、补充、删除个人信息，限制或拒绝部分处理，撤回可选授权，注销账号，或投诉安全问题，请邮件联系 <a className="font-bold text-[#356b16] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>。</p>
            <p className="mt-2">为保护账号安全，我们可能要求进行必要的身份核验。我们会在合理期限内处理申请；如因法律规定、技术原因或其他正当理由无法全部满足，会说明原因。政策发生重大变化时，我们会在 App 或本页面进行提示；涉及法律要求重新取得同意的，我们会重新征得你的同意。</p>
          </section>
        </div>

        <nav className="mt-10 flex flex-wrap gap-4 border-t border-[#102c48]/10 pt-5 text-sm font-bold text-[#356b16]">
          <Link href={sitePath('/terms')}>用户协议</Link>
          <Link href={sitePath('/data-collection')}>识别质量改进计划及数据采集授权说明</Link>
        </nav>
      </article>
    </main>
  );
}

import Link from 'next/link';
import { sitePath } from '@/lib/site-path';

export const dynamic = 'force-static';

const contactEmail = 'eTMFKing@qq.com';

export default function ToolPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] px-5 py-10 text-[#102c48]">
      <article className="mx-auto max-w-3xl rounded-[28px] bg-white p-6 shadow-sm sm:p-10">
        <Link href={sitePath('/')} className="text-sm font-bold text-[#356b16]">← 返回 eTMF 王</Link>
        <p className="mt-8 font-mono text-xs font-bold tracking-[.18em] text-[#356b16]">TOOL PRIVACY / 隐私政策</p>
        <h1 className="mt-3 text-3xl font-black tracking-[-.04em]">eTMF扫描王隐私政策</h1>
        <p className="mt-3 text-sm leading-6 text-[#102c48]/60">最后更新：2026 年 9 月 24 日 · TestFlight 测试版</p>

        <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#102c48]/82">
          <section>
            <h2 className="text-lg font-black text-[#102c48]">一、适用范围与联系</h2>
            <p className="mt-2">本政策仅适用于独立的 eTMF扫描王 iOS App（以下简称“Tool”），不适用于需要账号的 eTMF 王 Online App。Tool 由 App Store 页面所列开发者提供。如有隐私问题，请联系 <a className="font-bold text-[#356b16] underline" href={`mailto:${contactEmail}`}>{contactEmail}</a>。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">二、设备上的资料</h2>
            <p className="mt-2">Tool 无需注册或登录。你导入或扫描的图片、文档、OCR 文字、分类和命名结果、生成的 PDF 及工作区记录在设备本地处理和保存。Tool 不连接 eTMF 王 Online 后台，不将这些内容、文件元数据或使用遥测上传给开发者，也不用于广告追踪。</p>
            <p className="mt-2">只有在你主动使用系统分享或导出功能时，选定的文件才会交给你选择的目标 App、存储位置或接收方；后续处理由该目标的规则决定。请在分享前确认资料的保密要求。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">三、设备权限</h2>
            <p className="mt-2">扫描时可能请求相机权限，导入时可能使用系统照片或文件选择器。这些权限只用于你主动发起的操作。你可以在 iOS 设置中关闭权限；关闭后相关扫描或导入功能可能无法使用。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">四、反馈与第三方渠道</h2>
            <p className="mt-2">如果你主动通过 TestFlight、电子邮件或其他渠道反馈问题，你提供的联系信息、文字、截图或附件会经由 Apple 或相应邮件服务处理，并供开发者查看和回复。请勿在反馈中包含患者身份信息、未经脱敏的临床文件、账号密码或其他无权披露的资料。</p>
            <p className="mt-2">Apple 对 TestFlight 安装、崩溃和反馈等信息的处理适用 Apple 的政策；Tool 本身不会因此把你的本地文档上传到开发者后台。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">五、保留、删除与安全</h2>
            <p className="mt-2">本地资料由你在设备上管理，可在 Tool 中删除或导出。卸载 App 可能移除其本地资料；开发者无法远程查看、恢复或删除设备上的 Tool 文件。重要资料请保留原件和独立备份。</p>
            <p className="mt-2">通过邮件或 TestFlight 主动提交的反馈不属于 Tool 的本地工作区数据。若需咨询或请求删除直接发给开发者的反馈，请联系上述邮箱；Apple 渠道中的数据还需遵循 Apple 的处理规则。</p>
          </section>
          <section>
            <h2 className="text-lg font-black text-[#102c48]">六、测试资料与政策更新</h2>
            <p className="mt-2">TestFlight 测试期间请使用合成、脱敏或去标识化资料，并遵守所在机构及项目的保密要求。若 Tool 的数据处理方式发生变化，我们会更新本页面及 App 内提示；重大变化会在适用时另行征求同意。</p>
          </section>
        </div>

        <nav className="mt-10 border-t border-[#102c48]/10 pt-5 text-sm font-bold text-[#356b16]">
          <Link href={sitePath('/privacy')}>eTMF 王 Online 隐私政策</Link>
        </nav>
      </article>
    </main>
  );
}

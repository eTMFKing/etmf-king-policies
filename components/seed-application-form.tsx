'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
} from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

type ApplicationPayload = {
  preferredName: string;
  role: string;
  organizationType: string;
  city: string;
  contact: string;
  weeklyVolume: string;
  useCase: string;
  interviewConsent: boolean;
  privacyConsent: boolean;
  website: string;
};

type SubmitHandlerEvent = {
  preventDefault(): void;
  currentTarget: HTMLFormElement;
};

type ModelContextLike = {
  registerTool: (
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: Record<string, unknown>;
      annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
      execute: (input: unknown) => Promise<unknown>;
    },
    options?: { signal?: AbortSignal },
  ) => void | Promise<void>;
};

async function sendApplication(payload: ApplicationPayload) {
  const response = await fetch('/api/applications', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = (await response.json()) as {
    ok?: boolean;
    error?: string;
    applicationId?: string;
  };

  if (!response.ok || !result.ok) {
    throw new Error(result.error || '报名暂时没有保存成功，请稍后再试。');
  }

  return result;
}

function getFormString(form: FormData, name: string, fallback = '') {
  const value = form.get(name);
  return typeof value === 'string' ? value : fallback;
}

export function SeedApplicationForm() {
  const [interviewConsent, setInterviewConsent] = useState(true);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function submit(payload: ApplicationPayload) {
    setSubmitting(true);
    setError('');
    try {
      const result = await sendApplication(payload);
      setSubmitted(true);
      document
        .getElementById('apply')
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return result;
    } catch (caught) {
      const message =
        caught instanceof Error
          ? caught.message
          : '报名暂时没有保存成功，请稍后再试。';
      setError(message);
      throw caught;
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSubmit(event: SubmitHandlerEvent) {
    event.preventDefault();
    if (!privacyConsent) {
      setError('请确认同意报名信息的使用说明。');
      return;
    }

    const form = new FormData(event.currentTarget);
    try {
      await submit({
        preferredName: getFormString(form, 'preferredName'),
        role: getFormString(form, 'role'),
        organizationType: getFormString(form, 'organizationType'),
        city: getFormString(form, 'city'),
        contact: getFormString(form, 'contact'),
        weeklyVolume: getFormString(form, 'weeklyVolume', 'UNKNOWN'),
        useCase: getFormString(form, 'useCase'),
        interviewConsent,
        privacyConsent,
        website: getFormString(form, 'website'),
      });
    } catch {
      // The visible error state is set by submit().
    }
  }

  useEffect(() => {
    const modelContext = (
      document as Document & { modelContext?: ModelContextLike }
    ).modelContext;
    if (!modelContext?.registerTool) return;

    const lifecycle = new AbortController();
    const tool = {
      name: 'submit_seed_user_application',
      title: '提交 eTMF王种子用户报名',
      description:
        '提交一份 eTMF王种子用户报名，并在当前页面显示提交成功或失败的结果。仅在申请人已经确认报名信息使用说明后调用。',
      inputSchema: {
        type: 'object',
        properties: {
          preferredName: { type: 'string', minLength: 2, maxLength: 40 },
          role: {
            type: 'string',
            enum: ['CRC', 'CRA', 'TMF_QA', 'PM_CTA', 'OTHER'],
          },
          organizationType: {
            type: 'string',
            enum: ['SITE', 'SMO', 'CRO', 'SPONSOR', 'OTHER'],
          },
          city: { type: 'string', maxLength: 40 },
          contact: { type: 'string', minLength: 5, maxLength: 100 },
          weeklyVolume: {
            type: 'string',
            enum: ['LT_10', '10_30', '31_60', 'GT_60', 'UNKNOWN'],
          },
          useCase: { type: 'string', minLength: 12, maxLength: 600 },
          interviewConsent: { type: 'boolean' },
          privacyConsent: { const: true },
        },
        required: [
          'preferredName',
          'role',
          'organizationType',
          'contact',
          'weeklyVolume',
          'useCase',
          'interviewConsent',
          'privacyConsent',
        ],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      async execute(input: unknown) {
        if (!input || typeof input !== 'object') {
          throw new Error('报名参数必须是对象。');
        }
        const values = input as Omit<ApplicationPayload, 'website'>;
        const result = await submit({
          ...values,
          city: values.city || '',
          website: '',
        });
        return { status: 'submitted', applicationId: result.applicationId };
      },
    };

    try {
      void Promise.resolve(
        modelContext.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => undefined);
    } catch {
      // Unsupported or partial WebMCP implementations should not affect the form.
    }

    return () => lifecycle.abort();
  }, []);

  if (submitted) {
    return (
      <div className="flex min-h-[540px] flex-col items-center justify-center rounded-[28px] border border-[#b7f34a]/30 bg-[#0d2843] px-7 py-16 text-center text-white">
        <span className="mb-6 flex size-20 items-center justify-center rounded-full bg-[#b7f34a] text-[#071321]">
          <CheckCircle2 className="size-10" />
        </span>
        <p className="font-mono text-xs font-bold tracking-[.18em] text-[#8ee7ff]">
          APPLICATION RECEIVED
        </p>
        <h3 className="mt-4 text-3xl font-black tracking-tight">报名已收到</h3>
        <p className="mt-4 max-w-md text-base leading-7 text-white/65">
          我们会结合实际使用场景分批邀请。匹配后将通过你留下的联系方式发送体验说明。
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-8 h-11 rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white"
        >
          再提交一位体验者
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-white p-5 text-[#111b27] shadow-[0_25px_80px_rgba(0,0,0,.22)] sm:p-8"
    >
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold tracking-[.16em] text-[#0b6fd4]">
            SEED USER APPLICATION
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            申请成为种子用户
          </h3>
        </div>
        <span className="rounded-full bg-[#eaf3ff] px-3 py-1.5 text-xs font-bold text-[#0b6fd4]">
          约 2 分钟
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preferredName" className="text-sm font-bold">
            怎么称呼你 *
          </Label>
          <Input
            id="preferredName"
            name="preferredName"
            required
            minLength={2}
            maxLength={40}
            placeholder="例如：小林"
            className="h-12 rounded-xl bg-[#f5f7fa] px-4 text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-bold">
            你的工作角色 *
          </Label>
          <NativeSelect
            id="role"
            name="role"
            required
            defaultValue=""
            className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:bg-[#f5f7fa] [&_select]:px-4 [&_select]:pr-10 [&_select]:text-base"
          >
            <NativeSelectOption value="" disabled>
              请选择
            </NativeSelectOption>
            <NativeSelectOption value="CRC">
              CRC / 临床研究协调员
            </NativeSelectOption>
            <NativeSelectOption value="CRA">
              CRA / 临床监查员
            </NativeSelectOption>
            <NativeSelectOption value="TMF_QA">
              TMF 管理 / QA
            </NativeSelectOption>
            <NativeSelectOption value="PM_CTA">
              项目经理 / CTA
            </NativeSelectOption>
            <NativeSelectOption value="OTHER">
              其他临床运营角色
            </NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="organizationType" className="text-sm font-bold">
            所在机构 *
          </Label>
          <NativeSelect
            id="organizationType"
            name="organizationType"
            required
            defaultValue=""
            className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:bg-[#f5f7fa] [&_select]:px-4 [&_select]:pr-10 [&_select]:text-base"
          >
            <NativeSelectOption value="" disabled>
              请选择
            </NativeSelectOption>
            <NativeSelectOption value="SITE">
              研究中心 / 医院
            </NativeSelectOption>
            <NativeSelectOption value="SMO">SMO</NativeSelectOption>
            <NativeSelectOption value="CRO">CRO</NativeSelectOption>
            <NativeSelectOption value="SPONSOR">申办方</NativeSelectOption>
            <NativeSelectOption value="OTHER">其他</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-bold">
            所在城市
          </Label>
          <Input
            id="city"
            name="city"
            maxLength={40}
            placeholder="选填"
            className="h-12 rounded-xl bg-[#f5f7fa] px-4 text-base"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact" className="text-sm font-bold">
            联系方式 *
          </Label>
          <Input
            id="contact"
            name="contact"
            required
            minLength={5}
            maxLength={100}
            placeholder="手机号、微信号或邮箱，任选一种"
            className="h-12 rounded-xl bg-[#f5f7fa] px-4 text-base"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="weeklyVolume" className="text-sm font-bold">
            你每周大约处理多少份试验文件？
          </Label>
          <NativeSelect
            id="weeklyVolume"
            name="weeklyVolume"
            defaultValue="UNKNOWN"
            className="w-full [&_select]:h-12 [&_select]:rounded-xl [&_select]:bg-[#f5f7fa] [&_select]:px-4 [&_select]:pr-10 [&_select]:text-base"
          >
            <NativeSelectOption value="UNKNOWN">不确定</NativeSelectOption>
            <NativeSelectOption value="LT_10">少于 10 份</NativeSelectOption>
            <NativeSelectOption value="10_30">10–30 份</NativeSelectOption>
            <NativeSelectOption value="31_60">31–60 份</NativeSelectOption>
            <NativeSelectOption value="GT_60">60 份以上</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="useCase" className="text-sm font-bold">
            最想解决的归档问题是什么？ *
          </Label>
          <Textarea
            id="useCase"
            name="useCase"
            required
            minLength={12}
            maxLength={600}
            rows={5}
            placeholder="例如：中心纸质文件很多，扫描后还要对照目录、改名，再传到团队文件夹……"
            className="min-h-32 resize-y rounded-xl bg-[#f5f7fa] px-4 py-3 text-base leading-7"
          />
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="website">网站</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 space-y-4 rounded-2xl bg-[#f5f7fa] p-4">
        <label
          htmlFor="interviewConsent"
          className="flex cursor-pointer items-start gap-3 text-sm leading-6"
        >
          <Checkbox
            id="interviewConsent"
            checked={interviewConsent}
            onCheckedChange={setInterviewConsent}
            className="mt-1 size-5"
          />
          <span>
            我愿意在体验期间接受约 20 分钟的线上访谈，分享实际使用反馈。
          </span>
        </label>
        <label
          htmlFor="privacyConsent"
          className="flex cursor-pointer items-start gap-3 text-sm leading-6"
        >
          <Checkbox
            id="privacyConsent"
            checked={privacyConsent}
            onCheckedChange={setPrivacyConsent}
            className="mt-1 size-5"
          />
          <span>
            我同意报名信息仅用于种子用户筛选、体验邀请与相关访谈联系。*
          </span>
        </label>
      </div>

      {error ? (
        <Alert variant="destructive" className="mt-5 p-4">
          <CircleAlert className="mt-0.5" />
          <AlertTitle>还没有提交成功</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : null}

      <Button
        type="submit"
        disabled={submitting}
        className="mt-6 h-14 w-full rounded-full bg-[#0b6fd4] text-base font-extrabold text-white hover:bg-[#075daf]"
      >
        {submitting ? <LoaderCircle className="size-5 animate-spin" /> : null}
        {submitting ? '正在提交…' : '提交申请'}
        {!submitting ? <ArrowRight className="size-5" /> : null}
      </Button>
      <p className="mt-4 text-center text-xs leading-5 text-[#6b7a8a]">
        报名不代表自动入选。我们不会要求你在此页面上传任何试验文件、患者信息或账号密码。
      </p>
    </form>
  );
}

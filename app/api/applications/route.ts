import { createSeedApplication } from '@/db/applications';

const ALLOWED_ROLES = new Set(['CRC', 'CRA', 'TMF_QA', 'PM_CTA', 'OTHER']);
const ALLOWED_ORGANIZATIONS = new Set([
  'SITE',
  'SMO',
  'CRO',
  'SPONSOR',
  'OTHER',
]);
const ALLOWED_VOLUMES = new Set([
  'LT_10',
  '10_30',
  '31_60',
  'GT_60',
  'UNKNOWN',
]);

type ApplicationBody = {
  preferredName?: unknown;
  role?: unknown;
  organizationType?: unknown;
  city?: unknown;
  contact?: unknown;
  weeklyVolume?: unknown;
  useCase?: unknown;
  interviewConsent?: unknown;
  privacyConsent?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: ApplicationBody;

  try {
    body = (await request.json()) as ApplicationBody;
  } catch {
    return Response.json(
      { error: '提交内容格式不正确，请刷新后重试。' },
      { status: 400 },
    );
  }

  if (cleanText(body.website, 100)) {
    return Response.json({ ok: true, applicationId: crypto.randomUUID() });
  }

  const preferredName = cleanText(body.preferredName, 40);
  const role = cleanText(body.role, 20);
  const organizationType = cleanText(body.organizationType, 20);
  const city = cleanText(body.city, 40) || null;
  const contact = cleanText(body.contact, 100);
  const weeklyVolume = cleanText(body.weeklyVolume, 20) || 'UNKNOWN';
  const useCase = cleanText(body.useCase, 600);

  if (!preferredName || preferredName.length < 2) {
    return Response.json(
      { error: '请填写至少 2 个字的称呼。' },
      { status: 400 },
    );
  }
  if (!ALLOWED_ROLES.has(role)) {
    return Response.json({ error: '请选择你的工作角色。' }, { status: 400 });
  }
  if (!ALLOWED_ORGANIZATIONS.has(organizationType)) {
    return Response.json({ error: '请选择所在机构类型。' }, { status: 400 });
  }
  if (!ALLOWED_VOLUMES.has(weeklyVolume)) {
    return Response.json({ error: '请选择每周大致文件量。' }, { status: 400 });
  }
  if (contact.length < 5) {
    return Response.json(
      { error: '请留下可联系到你的手机号、微信号或邮箱。' },
      { status: 400 },
    );
  }
  if (useCase.length < 12) {
    return Response.json(
      { error: '请用至少 12 个字描述你目前的归档场景或困扰。' },
      { status: 400 },
    );
  }
  if (body.privacyConsent !== true) {
    return Response.json(
      { error: '请确认同意报名信息的使用说明。' },
      { status: 400 },
    );
  }

  const applicationId = crypto.randomUUID();

  try {
    await createSeedApplication({
      id: applicationId,
      preferredName,
      role,
      organizationType,
      city,
      contact,
      weeklyVolume,
      useCase,
      interviewConsent: body.interviewConsent === true,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Unable to create seed application', error);
    return Response.json(
      { error: '报名暂时没有保存成功，请稍后再试。' },
      { status: 503 },
    );
  }

  return Response.json({ ok: true, applicationId }, { status: 201 });
}

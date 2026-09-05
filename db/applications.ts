import { env } from 'cloudflare:workers';

export type SeedApplication = {
  id: string;
  preferredName: string;
  role: string;
  organizationType: string;
  city: string | null;
  contact: string;
  weeklyVolume: string | null;
  useCase: string;
  interviewConsent: boolean;
  createdAt: string;
};

export async function createSeedApplication(application: SeedApplication) {
  if (!env.DB) {
    throw new Error('D1 binding DB is unavailable.');
  }

  return env.DB.prepare(
    `INSERT INTO seed_applications (
      id,
      preferred_name,
      role,
      organization_type,
      city,
      contact,
      weekly_volume,
      use_case,
      interview_consent,
      status,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)`,
  )
    .bind(
      application.id,
      application.preferredName,
      application.role,
      application.organizationType,
      application.city,
      application.contact,
      application.weeklyVolume,
      application.useCase,
      application.interviewConsent ? 1 : 0,
      application.createdAt,
    )
    .run();
}

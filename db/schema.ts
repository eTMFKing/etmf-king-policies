import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const seedApplications = sqliteTable('seed_applications', {
  id: text('id').primaryKey(),
  preferredName: text('preferred_name').notNull(),
  role: text('role').notNull(),
  organizationType: text('organization_type').notNull(),
  city: text('city'),
  contact: text('contact').notNull(),
  weeklyVolume: text('weekly_volume'),
  useCase: text('use_case').notNull(),
  interviewConsent: integer('interview_consent', { mode: 'boolean' })
    .notNull()
    .default(false),
  status: text('status').notNull().default('new'),
  createdAt: text('created_at').notNull(),
});

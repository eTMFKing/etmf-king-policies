CREATE TABLE `seed_applications` (
	`id` text PRIMARY KEY NOT NULL,
	`preferred_name` text NOT NULL,
	`role` text NOT NULL,
	`organization_type` text NOT NULL,
	`city` text,
	`contact` text NOT NULL,
	`weekly_volume` text,
	`use_case` text NOT NULL,
	`interview_consent` integer DEFAULT false NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text NOT NULL
);

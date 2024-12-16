ALTER TABLE `payments` ADD `title` text(256);--> statement-breakpoint
ALTER TABLE `payments` ADD `applicationId` integer REFERENCES applications(id);
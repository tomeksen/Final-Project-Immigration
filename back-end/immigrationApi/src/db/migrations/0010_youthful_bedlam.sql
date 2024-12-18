PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text,
	`applicationName` text(40) NOT NULL,
	`applicationDate` text DEFAULT (CURRENT_DATE) NOT NULL,
	`applicationType` text(40),
	`applicationStatus` integer
);
--> statement-breakpoint
INSERT INTO `__new_applications`("id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus") SELECT "id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus" FROM `applications`;--> statement-breakpoint
DROP TABLE `applications`;--> statement-breakpoint
ALTER TABLE `__new_applications` RENAME TO `applications`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
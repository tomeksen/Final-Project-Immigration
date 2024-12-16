PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text,
	`applicationName` text(40) NOT NULL,
	`applicationDate` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`applicationType` text(40),
	`applicationStatus` integer
);
--> statement-breakpoint
INSERT INTO `__new_applications`("id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus") SELECT "id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus" FROM `applications`;--> statement-breakpoint
DROP TABLE `applications`;--> statement-breakpoint
ALTER TABLE `__new_applications` RENAME TO `applications`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_userEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventId` integer,
	`userId` text,
	`eventDateStart` integer,
	`eventDateFinish` integer,
	FOREIGN KEY (`eventId`) REFERENCES `eventType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_userEvents`("id", "eventId", "userId", "eventDateStart", "eventDateFinish") SELECT "id", "eventId", "userId", "eventDateStart", "eventDateFinish" FROM `userEvents`;--> statement-breakpoint
DROP TABLE `userEvents`;--> statement-breakpoint
ALTER TABLE `__new_userEvents` RENAME TO `userEvents`;--> statement-breakpoint
ALTER TABLE `documents` ADD `applicationTask` integer REFERENCES applicationTasks(id);--> statement-breakpoint
ALTER TABLE `documents` ADD `userId` text;--> statement-breakpoint
ALTER TABLE `payments` ADD `isCompleted` integer DEFAULT false;
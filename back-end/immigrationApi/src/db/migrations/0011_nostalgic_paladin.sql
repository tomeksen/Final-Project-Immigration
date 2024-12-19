PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_applicationTasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`categoryId` integer,
	`title` text(256) NOT NULL,
	`isComplete` integer DEFAULT false,
	`isRevised` integer DEFAULT false,
	`dueDate` text DEFAULT (CURRENT_DATE),
	`description` text(256) NOT NULL,
	`steps` text,
	`instructions` text,
	`notes` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `applicationCategory`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_applicationTasks`("id", "categoryId", "title", "isComplete", "isRevised", "dueDate", "description", "steps", "instructions", "notes", "timestamp") SELECT "id", "categoryId", "title", "isComplete", "isRevised", "dueDate", "description", "steps", "instructions", "notes", "timestamp" FROM `applicationTasks`;--> statement-breakpoint
DROP TABLE `applicationTasks`;--> statement-breakpoint
ALTER TABLE `__new_applicationTasks` RENAME TO `applicationTasks`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text,
	`applicationName` text(40) NOT NULL,
	`applicationDate` text DEFAULT (CURRENT_DATE),
	`applicationType` text(40),
	`applicationStatus` integer
);
--> statement-breakpoint
INSERT INTO `__new_applications`("id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus") SELECT "id", "userId", "applicationName", "applicationDate", "applicationType", "applicationStatus" FROM `applications`;--> statement-breakpoint
DROP TABLE `applications`;--> statement-breakpoint
ALTER TABLE `__new_applications` RENAME TO `applications`;
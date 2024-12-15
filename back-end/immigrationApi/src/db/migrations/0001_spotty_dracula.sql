PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_applicationCategory` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`applicationId` integer,
	`categoryName` text(50),
	`order` integer,
	FOREIGN KEY (`applicationId`) REFERENCES `applications`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_applicationCategory`("id", "applicationId", "categoryName", "order") SELECT "id", "applicationId", "categoryName", "order" FROM `applicationCategory`;--> statement-breakpoint
DROP TABLE `applicationCategory`;--> statement-breakpoint
ALTER TABLE `__new_applicationCategory` RENAME TO `applicationCategory`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_applicationTasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`categoryId` integer,
	`title` text(256) NOT NULL,
	`isComplete` integer DEFAULT false,
	`isRevised` integer DEFAULT false,
	`dueDate` integer,
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
ALTER TABLE `__new_applicationTasks` RENAME TO `applicationTasks`;
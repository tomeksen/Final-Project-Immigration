PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_taskComments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`taskId` integer,
	`commentContent` text(100),
	FOREIGN KEY (`taskId`) REFERENCES `applicationTasks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_taskComments`("id", "taskId", "commentContent") SELECT "id", "taskId", "commentContent" FROM `taskComments`;--> statement-breakpoint
DROP TABLE `taskComments`;--> statement-breakpoint
ALTER TABLE `__new_taskComments` RENAME TO `taskComments`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
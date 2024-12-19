PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_userEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventId` integer DEFAULT 1,
	`userId` text,
	`title` text(256),
	`isOnline` integer DEFAULT false,
	`meetingCode` text(256),
	`eventDateStart` text DEFAULT (CURRENT_TIMESTAMP),
	`eventDateFinish` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`eventId`) REFERENCES `eventType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_userEvents`("id", "eventId", "userId", "title", "isOnline", "meetingCode", "eventDateStart", "eventDateFinish") SELECT "id", "eventId", "userId", "title", "isOnline", "meetingCode", "eventDateStart", "eventDateFinish" FROM `userEvents`;--> statement-breakpoint
DROP TABLE `userEvents`;--> statement-breakpoint
ALTER TABLE `__new_userEvents` RENAME TO `userEvents`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
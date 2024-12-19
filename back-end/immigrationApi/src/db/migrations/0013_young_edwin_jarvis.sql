PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_userEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventId` integer,
	`userId` text,
	`eventDateStart` text DEFAULT (CURRENT_DATE),
	`eventDateFinish` text DEFAULT (CURRENT_DATE),
	FOREIGN KEY (`eventId`) REFERENCES `eventType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_userEvents`("id", "eventId", "userId", "eventDateStart", "eventDateFinish") SELECT "id", "eventId", "userId", "eventDateStart", "eventDateFinish" FROM `userEvents`;--> statement-breakpoint
DROP TABLE `userEvents`;--> statement-breakpoint
ALTER TABLE `__new_userEvents` RENAME TO `userEvents`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`amount` text(256) NOT NULL,
	`applicationId` integer,
	`isCompleted` integer DEFAULT false,
	`paymentDate` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`userId` text,
	`limitDate` text DEFAULT (CURRENT_DATE) NOT NULL,
	FOREIGN KEY (`applicationId`) REFERENCES `applications`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_payments`("id", "title", "amount", "applicationId", "isCompleted", "paymentDate", "userId", "limitDate") SELECT "id", "title", "amount", "applicationId", "isCompleted", "paymentDate", "userId", "limitDate" FROM `payments`;--> statement-breakpoint
DROP TABLE `payments`;--> statement-breakpoint
ALTER TABLE `__new_payments` RENAME TO `payments`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
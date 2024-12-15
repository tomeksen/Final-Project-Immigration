CREATE TABLE `applicationCategory` (
	`id` integer,
	`categoryName` text(50),
	`order` integer,
	FOREIGN KEY (`id`) REFERENCES `applications`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `applicationCategoryTemplate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
);
--> statement-breakpoint
CREATE TABLE `applicationTasks` (
	`id` integer,
	`title` text(256) NOT NULL,
	`isComplete` integer DEFAULT false,
	`isRevised` integer DEFAULT false,
	`dueDate` integer,
	`description` text(256) NOT NULL,
	`steps` text,
	`instructions` text,
	`notes` text,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`id`) REFERENCES `applicationCategory`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `applicationTasksTemplate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
);
--> statement-breakpoint
CREATE TABLE `applicationTemplate` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL
);
--> statement-breakpoint
CREATE TABLE `applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`applicationName` text(40) NOT NULL,
	`applicationDate` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`applicationType` text(40),
	`applicationStatus` integer
);
--> statement-breakpoint
CREATE TABLE `channels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`channelName` text(40)
);
--> statement-breakpoint
CREATE TABLE `documentType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`typeName` text(30),
	`hasExpiration` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `documents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`documentTypeId` integer,
	`documentFile` blob,
	`expirationDate` integer,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`documentTypeId`) REFERENCES `documentType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `eventType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventName` text,
	`defaultTimeInHours` numeric
);
--> statement-breakpoint
CREATE TABLE `messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`channelId` integer,
	`isRead` integer DEFAULT false NOT NULL,
	`content` text
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`amount` text(256) NOT NULL,
	`paymentDate` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`limitDate` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`content` text(256) NOT NULL,
	`headerImage` blob,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `taskComments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`taskId` integer,
	`commentContent` text(50)
);
--> statement-breakpoint
CREATE TABLE `userAddress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`address` text NOT NULL,
	`city` text(40),
	`state` text(60),
	`country` text(30),
	`postalCode` text(30)
);
--> statement-breakpoint
CREATE TABLE `userChannel` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`channelId` integer,
	`userId` integer
);
--> statement-breakpoint
CREATE TABLE `userEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventId` integer,
	`userId` integer,
	`eventDateStart` integer,
	`eventDateFinish` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text(24) NOT NULL,
	`password` text(256) NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`is_admin` integer DEFAULT false NOT NULL,
	`email` text(256),
	`first_name` text(40),
	`lastName` text(100),
	`nationality` text(40),
	`language` text(40),
	`gender` integer,
	`profileImage` blob,
	`addressId` integer,
	`role` text DEFAULT 'guest',
	FOREIGN KEY (`addressId`) REFERENCES `userAddress`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_username_unique` ON `users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
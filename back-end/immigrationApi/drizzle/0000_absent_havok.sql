CREATE TABLE `ApplicationCategory` (
	`id` integer,
	`categoryName` text(50),
	`order` integer,
	FOREIGN KEY (`id`) REFERENCES `ApplicationCategory`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `ApplicationCategoryTemplate` (

);
--> statement-breakpoint
CREATE TABLE `ApplicationTasks` (
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
	FOREIGN KEY (`id`) REFERENCES `ApplicationCategory`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `ApplicationTasksTemplate` (

);
--> statement-breakpoint
CREATE TABLE `ApplicationTemplate` (

);
--> statement-breakpoint
CREATE TABLE `Applications` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`applicationName` text(40) NOT NULL,
	`applicationDate` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`applicationType` text(40),
	`applicationStatus` integer
);
--> statement-breakpoint
CREATE TABLE `Channels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`channelName` text(40)
);
--> statement-breakpoint
CREATE TABLE `DocumentType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`typeName` text(30),
	`hasExpiration` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Documents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`documentTypeId` integer,
	`documentFile` blob,
	`expirationDate` integer,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`documentTypeId`) REFERENCES `DocumentType`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `EventType` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventName` text,
	`defaultTimeInHours` numeric
);
--> statement-breakpoint
CREATE TABLE `Messages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer,
	`channelId` integer,
	`isRead` integer DEFAULT false NOT NULL,
	`content` text
);
--> statement-breakpoint
CREATE TABLE `Payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`amount` text(256) NOT NULL,
	`paymentDate` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`limitDate` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`content` text(256) NOT NULL,
	`headerImage` blob,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TaskComments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`taskId` integer,
	`commentContent` text(50)
);
--> statement-breakpoint
CREATE TABLE `UserAddress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`address` text NOT NULL,
	`city` text(40),
	`state` text(60),
	`country` text(30),
	`postalCode` text(30)
);
--> statement-breakpoint
CREATE TABLE `UserChannel` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`channelId` integer,
	`userId` integer
);
--> statement-breakpoint
CREATE TABLE `UserEvents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`eventId` integer,
	`userId` integer,
	`eventDateStart` integer,
	`eventDateFinish` integer
);
--> statement-breakpoint
CREATE TABLE `Users` (
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
	FOREIGN KEY (`addressId`) REFERENCES `UserAddress`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `Users_username_unique` ON `Users` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `Users_email_unique` ON `Users` (`email`);
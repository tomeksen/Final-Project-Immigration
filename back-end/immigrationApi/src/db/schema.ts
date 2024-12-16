import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, customType, blob, foreignKey, numeric, AnySQLiteColumn, int } from 'drizzle-orm/sqlite-core';
//TODO: CHECK NUMERIC OR INTEGER
//
//
//#region posts
export const posts = sqliteTable('posts', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title', { length: 256 }).notNull(),
  content: text('content', { length: 256 }).notNull(),
  headerImage: blob('headerImage'),
  timestamp: text('timestamp')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

//#endregion
//#region users
export const users = sqliteTable('users', {
  id: integer().primaryKey({ autoIncrement: true }),

  username: text('username', { length: 24 }).notNull().unique(),

  password: text('password', { length: 256 }).notNull(),

  timestamp: text('timestamp')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  //TODO: check boolean type
  isAdmin: integer('is_admin', {mode: 'boolean'})
  .default(false)
  .notNull(),

  email: text({length: 256}).unique(),

  firstName: text('first_name', {length: 40}),

  lastName: text('lastName', {length: 100}),

  nationality: text('nationality',{length:40}),
  language: text('language',{length:40}),
  //TODO: check how to add dates
  dateOfBirth: text('timestamp')
  .default(sql`CURRENT_TIMESTAMP`)
  .notNull(),
  gender: integer('gender'),
  //TODO: get more info of blob type
  profileImage: blob('profileImage'),
  addressId: integer('addressId').references((): AnySQLiteColumn => userAddress.id),
  role: text().$type<"guest" | "user" | "admin">().default("guest"),

});

export const userAddress= sqliteTable('userAddress',{
  id: integer().primaryKey({ autoIncrement: true }),
  address: text('address').notNull(),
  city: text('city',{length:40}),
  state: text('state',{length: 60}),
  country: text('country',{length:30}),
  postalCode: text('postalCode',{length:30})
})
//#endregion
//#region applications
export const applications = sqliteTable('applications', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: text('userId'),
  applicationName: text('applicationName',{length: 40})
  .notNull(),
  applicationDate: integer('applicationDate',{mode: 'timestamp'})
  .default(sql`CURRENT_TIMESTAMP`)
  .notNull(),
  applicationType: text('applicationType',{length:40}),
  applicationStatus: integer('applicationStatus')
})

export const applicationTemplate= sqliteTable('applicationTemplate',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
})

export const applicationCategory= sqliteTable('applicationCategory',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  applicationId: int('applicationId').references((): AnySQLiteColumn => applications.id),
  categoryName: text('categoryName',{length:50}),
  order: integer('order')
})

export const applicationCategoryTemplate= sqliteTable('applicationCategoryTemplate',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

})

export const applicationTasks = sqliteTable('applicationTasks', {
  // id is set on insert, incrementing
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  categoryId: int('categoryId').references((): AnySQLiteColumn => applicationCategory.id),
  // title of the task
  title: text('title', { length: 256 }).notNull(),
  isComplete: integer('isComplete',{mode:'boolean'}).default(false),
  isRevised: integer('isRevised',{mode:'boolean'}).default(false),
  dueDate: integer('dueDate',{mode:'timestamp'}),
  // description of the task
  description: text('description', { length: 256 }).notNull(),
  steps: text('steps',{mode:'json'}),
  instructions: text('instructions',{mode:'json'}),
  notes: text('notes'),
  // timestamp is set on insert
  timestamp: text('timestamp')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const applicationTasksTemplate= sqliteTable('applicationTasksTemplate', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
})

//#endregion
//#region comments
export const taskComments = sqliteTable('taskComments',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  taskId: integer('taskId',{mode:'number'}).references((): AnySQLiteColumn => applicationTasks.id),
  isRead: integer('isRead',{mode:'boolean'}).default(false),
  commentContent: text('commentContent',{length:100})
})
//#endregion
//#region events
export const userEvents = sqliteTable('userEvents',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    eventTypeId: integer('eventId',{ mode: 'number'}).references((): AnySQLiteColumn => eventType.id),
    userId: text('userId'),
    eventDateStart: integer('eventDateStart',{ mode:'timestamp' }),
    eventDateFinish: integer('eventDateFinish',{ mode:'timestamp' })
  }
)

export const eventType = sqliteTable('eventType',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  eventName: text('eventName'),
  defaultTimeInHours: numeric('defaultTimeInHours')
})
//#endregion
//#region documents
export const documents = sqliteTable('documents',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  documentTypeId: integer('documentTypeId').references((): AnySQLiteColumn => documentType.id),
  documentFile: blob('documentFile'),
  applicationTaskId: integer('applicationTask').references((): AnySQLiteColumn => applicationTasks.id),
  userId: text('userId'),
  expirationDate: integer('expirationDate',{mode:'timestamp'}),
  createdAt: integer('createdAt',{mode:'timestamp'}).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: integer('updatedAt',{mode:'timestamp'}).default(sql`CURRENT_TIMESTAMP`).notNull()
})

export const documentType = sqliteTable('documentType',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  typeName: text('typeName',{length: 30}),
  hasExpiration: integer('hasExpiration',{ mode:'boolean'}).default(false).notNull()
})
//Thinking about making it a json
// export const documentTypeFields = sqliteTable('documentTypeFields',{
//  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
//  documentFields: text('documentFields',{mode:'json'})
// })
//#endregion
//#region payments
export const payments = sqliteTable('payments', {
  // id is set on insert, incrementing
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title', { length: 256 }).notNull(),
  // amount of the payment
  amount: text('amount', { length: 256 }).notNull(),
  applicationId: integer('applicationId').references((): AnySQLiteColumn => applications.id),
  isCompleted: integer('isCompleted',{mode:'boolean'}).default(false),
  // timestamp is set on insert
  paymentDate: text('paymentDate')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  
  limitDate: integer('limitDate', {mode:'timestamp'})
  .notNull(),
});
//#endregion
//#region inbox
export const channels = sqliteTable('channels',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  channelName: text('channelName',{length:40})
})

export const userChannel = sqliteTable('userChannel',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  channelId: integer('channelId', { mode: 'number' }),
  userId: integer('userId', { mode: 'number' })
})

export const messages = sqliteTable('messages',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer('userId',{mode:'number'}),
  channelId: integer('channelId',{mode:'number'}),
  isRead: integer('isRead',{mode:'boolean'}).default(false).notNull(),
  //check this content mode
  content: text('content')
})
//#endregion
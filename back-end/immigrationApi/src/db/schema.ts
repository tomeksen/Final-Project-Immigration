import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, customType, blob, foreignKey, numeric, AnySQLiteColumn, int } from 'drizzle-orm/sqlite-core';
//TODO: CHECK NUMERIC OR INTEGER
//
//
//#region posts
export const posts = sqliteTable('Posts', {
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
export const users = sqliteTable('Users', {
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

export const userAddress= sqliteTable('UserAddress',{
  id: integer().primaryKey({ autoIncrement: true }),
  address: text('address').notNull(),
  city: text('city',{length:40}),
  state: text('state',{length: 60}),
  country: text('country',{length:30}),
  postalCode: text('postalCode',{length:30})
})
//#endregion
//#region applications
export const applications = sqliteTable('Applications', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer('userId', {mode: 'number' }),
  applicationName: text('applicationName',{length: 40})
  .notNull(),
  applicationDate: integer('applicationDate',{mode: 'timestamp'})
  .default(sql`CURRENT_TIMESTAMP`)
  .notNull(),
  applicationType: text('applicationType',{length:40}),
  applicationStatus: integer('applicationStatus')
})

export const applicationTemplate= sqliteTable('ApplicationTemplate',{

})

export const applicationCategory= sqliteTable('ApplicationCategory',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  applicationId: int('id').references((): AnySQLiteColumn => applicationCategory.id),
  categoryName: text('categoryName',{length:50}),
  order: integer('order')
})

export const applicationCategoryTemplate= sqliteTable('ApplicationCategoryTemplate',{

})

export const applicationTasks = sqliteTable('ApplicationTasks', {
  // id is set on insert, incrementing
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  categoryId: int('id').references((): AnySQLiteColumn => applicationCategory.id),
  // title of the task
  title: text('title', { length: 256 }).notNull(),
  isComplete: integer('isComplete',{mode:'boolean'}).default(false),
  isRevised: integer('isRevised',{mode:'boolean'}).default(false),
  dueDate: integer('dueDate',{mode:'timestamp'}),
  // description of the task
  description: text('description', { length: 256 }).notNull(),
  steps: text('steps'),
  instructions: text('instructions'),
  notes: text('notes'),
  // timestamp is set on insert
  timestamp: text('timestamp')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const applicationTasksTemplate= sqliteTable('ApplicationTasksTemplate', {

})

export const taskComments = sqliteTable('TaskComments',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  taskId: integer('taskId',{mode:'number'}),
  commentContent: text('commentContent',{length:50})
})
//#endregion
//#region events
export const userEvents = sqliteTable('UserEvents',
  {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    eventId: integer('eventId',{ mode: 'number'}),
    userId: integer('userId', { mode: 'number' }),
    eventDateStart: integer('eventDateStart',{ mode:'timestamp' }),
    eventDateFinish: integer('eventDateFinish',{ mode:'timestamp' })
  }
)

export const eventType = sqliteTable('EventType',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  eventName: text('eventName'),
  defaultTimeInHours: numeric('defaultTimeInHours')
})
//#endregion
//#region documents
export const documents = sqliteTable('Documents',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  documentTypeId: integer('documentTypeId').references((): AnySQLiteColumn => documentType.id),
  documentFile: blob('documentFile'),
  expirationDate: integer('expirationDate',{mode:'timestamp'}),
  createdAt: integer('createdAt',{mode:'timestamp'}).default(sql`CURRENT_TIMESTAMP`).notNull(),
  updatedAt: integer('updatedAt',{mode:'timestamp'}).default(sql`CURRENT_TIMESTAMP`).notNull()
})

export const documentType = sqliteTable('DocumentType',{
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
export const payments = sqliteTable('Payments', {
  // id is set on insert, incrementing
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),

  // amount of the payment
  amount: text('amount', { length: 256 }).notNull(),

  // timestamp is set on insert
  paymentDate: text('paymentDate')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  
  limitDate: integer('limitDate', {mode:'timestamp'})
  .notNull(),
});
//#endregion
//#region inbox
export const channels = sqliteTable('Channels',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  channelName: text('channelName',{length:40})
})
export const userChannel = sqliteTable('UserChannel',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  channelId: integer('channelId', { mode: 'number' }),
  userId: integer('userId', { mode: 'number' })
})
export const messages = sqliteTable('Messages',{
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userId: integer('userId',{mode:'number'}),
  channelId: integer('channelId',{mode:'number'}),
  isRead: integer('isRead',{mode:'boolean'}).default(false).notNull(),
  //check this content mode
  content: text('content')
})
//#endregion
import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core'

export const community = pgTable('communities', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 255 }).notNull(),
	description: text('description').notNull(),
	image: varchar('image', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	createdBy: text('created_by').notNull(),
})

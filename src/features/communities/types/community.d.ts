import { community } from '@/src/db/schema/community.js'

export type InsertCommunity = typeof community.$inferInsert
export type SelectCommunity = typeof community.$inferSelect

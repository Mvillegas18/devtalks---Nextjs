import { db } from '@/src/db/index'
import type { InsertCommunity, SelectCommunity } from '../types/community'
import { community } from '@/src/db/schema'

export interface ICommunityRepository {
	create(data: InsertCommunity): Promise<SelectCommunity>
}

class CommunityRepository implements ICommunityRepository {
	async create(data: InsertCommunity) {
		// Implementation for creating a community
		const [result] = await db.insert(community).values(data).returning()
		return result
	}
}

export const communityRepository = new CommunityRepository()

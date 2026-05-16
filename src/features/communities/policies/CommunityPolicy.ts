import { User } from 'better-auth'
import type { SelectCommunity } from '../types/community.js'

export class CommunityPolicy {
	static isAdmin(user: User, community: SelectCommunity): boolean {
		return community.createdBy === user.id
	}

	static canEdit(user: User, community: SelectCommunity): boolean {
		return this.isAdmin(user, community)
	}
	static canDelete(user: User, community: SelectCommunity): boolean {
		return this.isAdmin(user, community)
	}
	static canViewMembers(user: User, community: SelectCommunity): boolean {
		return this.isAdmin(user, community)
	}
}

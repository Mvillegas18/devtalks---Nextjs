import { User } from 'better-auth'
import { SelectCommunity } from '../types/community'

export class MembershipPolicy {
	static canJoin(
		user: User,
		community: SelectCommunity,
		isMember: boolean,
	): boolean {
		if (isMember) return false // Already a member
		if (community.createdBy === user.id) return false // Creator cannot join as member
		return true
	}

	static canLeave(
		user: User,
		community: SelectCommunity,
		isMember: boolean,
	): boolean {
		if (!isMember) return false // Not a member
		if (community.createdBy === user.id) return false // Creator cannot leave their own community
		return isMember
	}
}

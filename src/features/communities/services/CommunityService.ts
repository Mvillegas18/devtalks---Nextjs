import { User } from 'better-auth'
import { CommunityInput } from '../schema/communitySchema'
import {
	communityRepository,
	ICommunityRepository,
} from './CommunityRepository'
import { CommunityPolicy } from '../policies/CommunityPolicy'
import { MembershipPolicy } from '../policies/MembershipPolicy'

class CommunityService {
	constructor(private communityRepository: ICommunityRepository) {}

	async createCommunity(data: CommunityInput, userId: string) {
		// Lógica para crear una comunidad utilizando communityRepository
		await this.communityRepository.create({
			...data,
			createdBy: userId,
		})
	}

	async getUserCommunities(user: User) {
		const communities = await this.communityRepository.findByUser(user.id)
		const enriched = await Promise.all(
			communities.map(async (community) => {
				const isMember = true
				const isAdmin = CommunityPolicy.isAdmin(user, community)
				const canEdit = CommunityPolicy.canEdit(user, community)
				const canDelete = CommunityPolicy.canDelete(user, community)
				const canJoin = MembershipPolicy.canJoin(user, community, isMember)
				const canLeave = MembershipPolicy.canLeave(user, community, isMember)
				const canViewMembers = CommunityPolicy.canViewMembers(user, community)

				return {
					data: community,
					context: {
						isMember,
						isAdmin,
					},
					permissions: {
						canEdit,
						canDelete,
						canJoin,
						canLeave,
						canViewMembers,
					},
				}
			}),
		)
		return enriched
	}

	async getCommunityById(communityId: string) {
		return await this.communityRepository.findById(communityId)
	}

	async getCommunityDetails(communityId: string, user: User) {
		const community = await this.communityRepository.findById(communityId)
		if (!community) return null

		const isMember = false
		const isAdmin = CommunityPolicy.isAdmin(user, community)
		const canEdit = CommunityPolicy.canEdit(user, community)
		const canDelete = CommunityPolicy.canDelete(user, community)
		const canJoin = MembershipPolicy.canJoin(user, community, isMember)
		const canLeave = MembershipPolicy.canLeave(user, community, isMember)
		const canViewMembers = CommunityPolicy.canViewMembers(user, community)
		return {
			data: community,
			context: {
				isMember,
				isAdmin,
			},
			permissions: {
				canEdit,
				canDelete,
				canJoin,
				canLeave,
				canViewMembers,
			},
		}
	}
}

export const communityService = new CommunityService(communityRepository)

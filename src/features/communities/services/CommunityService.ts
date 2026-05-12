import { CommunityInput } from '../schema/communitySchema'
import {
	communityRepository,
	ICommunityRepository,
} from './CommunityRepository'

class CommunityService {
	constructor(private communityRepository: ICommunityRepository) {}

	async createCommunity(data: CommunityInput, userId: string) {
		// Lógica para crear una comunidad utilizando communityRepository
		await this.communityRepository.create({
			...data,
			createdBy: userId,
		})
	}
}

export const communityService = new CommunityService(communityRepository)

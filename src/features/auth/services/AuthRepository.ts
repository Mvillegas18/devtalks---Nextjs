import { db } from '@/src/db/index'
import { User } from '@/src/features/auth/types/auth'

export interface IAuthRepository {
	userExist(email: string): Promise<User | undefined>
}
class AuthRepository implements IAuthRepository {
	async userExist(email: string) {
		return await db.query.users.findFirst({
			where: { email },
		})
	}
}

export const authRepository = new AuthRepository()

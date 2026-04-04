import { auth } from '@/src/lib/auth'
import type { SignUpInput } from '../shemas/authSchema'
import { authRepository, IAuthRepository } from './AuthRepository'

class AuthService {
	constructor(private authRepository: IAuthRepository) {}

	async register(credentials: SignUpInput) {
		const { name, email, password } = credentials

		// Revisar si el usuario ya existe en la base de datos
		const user = await this.authRepository.userExist(email)
		if (user) {
			return {
				error: 'El usuario ya existe',
				success: '',
			}
		}

		// Validacion de negocio

		// Manejar el registro del usuario en la base de datos
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			},
		})

		return {
			error: '',
			success: 'Usuario registrado exitosamente, revisa tu correo.',
		}
	}
}

export const authService = new AuthService(authRepository)

import { auth } from '@/src/lib/auth'
import type { SignUpInput } from '../shemas/authSchema'

class AuthService {
	async register(credentials: SignUpInput) {
		const { name, email, password } = credentials

		// Revisar si el usuario ya existe en la base de datos

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

export const authService = new AuthService()

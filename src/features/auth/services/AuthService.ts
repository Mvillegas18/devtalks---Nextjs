import { auth } from '@/src/lib/auth'
import type { SignInInput, SignUpInput } from '../shemas/authSchema'
import { authRepository, IAuthRepository } from './AuthRepository'
import { headers } from 'next/headers'
import { APIError } from 'better-auth'

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

	async login(credentials: SignInInput) {
		const { email, password } = credentials

		//Verificar si el usuario existe.
		const user = await this.authRepository.userExist(email)
		if (!user) {
			return {
				error: 'El usuario no existe',
				success: '',
			}
		}

		// Verificar su password y si confirmo su cuenta.

		try {
			await auth.api.signInEmail({
				body: {
					email,
					password,
					callbackURL: '/dashboard',
				},
				headers: await headers(),
			})
			return {
				error: '',
				success: 'Sesión iniciada exitosamente',
			}
		} catch (error) {
			if (error instanceof APIError) {
				const messages: Record<number, string> = {
					400: 'Solicitud inválida',
					401: 'Password incorrecto',
					403: 'Acceso denegado',
					404: 'Usuario no encontrado',
					409: 'El usuario ya existe',
					429: 'Demasiados intentos, intenta más tarde',
					500: 'Error interno del servidor',
					503: 'Servicio no disponible',
				}
				const errorMessage = messages[error.statusCode]
				if (errorMessage) {
					return {
						error: errorMessage,
						success: '',
					}
				}
			}
			return {
				error: 'Ocurrió un error inesperado',
				success: '',
			}
		}
	}
}

export const authService = new AuthService(authRepository)

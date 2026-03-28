import type { SignUpInput } from '../shemas/authSchema.js'

class AuthService {
	async register(credentials: SignUpInput) {
		const {name, email, password} = credentials

        // Revisar si el usuario ya existe en la base de datos

        // Validacion de negocio

        // Manejar el registro del usuario en la base de datos
	}
}

export const authService = new AuthService()

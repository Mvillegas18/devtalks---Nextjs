'use server'

import { authService } from '../services/AuthService'
import { SignUpSchema, type SignUpInput } from '../shemas/authSchema'

export async function signUpAction(input: SignUpInput) {
	const { success, data } = SignUpSchema.safeParse(input)

	if (!success) {
		return {
			error: 'Hubo un error',
			success: '',
		}
	}

	const response = await authService.register(data)
	return response
}

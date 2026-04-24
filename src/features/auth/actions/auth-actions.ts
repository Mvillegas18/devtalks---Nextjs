'use server'

import { authService } from '../services/AuthService'
import {
	ForgotPasswordInput,
	ForgotPasswordSchema,
	SignInInput,
	SignInSchema,
	SignUpSchema,
	type SignUpInput,
} from '../shemas/authSchema'

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

export async function signInAction(input: SignInInput) {
	const { success, data } = SignInSchema.safeParse(input)
	if (!success) {
		return {
			error: 'Hubo un error',
			success: '',
		}
	}

	const response = await authService.login(data)
	return response
}

export async function forgotPasswordAction(input: ForgotPasswordInput) {
	const { success, data } = ForgotPasswordSchema.safeParse(input)
	if (!success) {
		return {
			error: 'Hubo un error',
			success: '',
		}
	}

	const response = await authService.requestPasswordReset(data)
	return response
}

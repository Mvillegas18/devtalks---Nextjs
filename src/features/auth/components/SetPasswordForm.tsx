'use client'

import { Form } from '@/src/shared/components/forms/Form'
import { FormInput } from '@/src/shared/components/forms/FormInput'
import { FormLabel } from '@/src/shared/components/forms/FormLabel'
import { FormSubmit } from '@/src/shared/components/forms/FormSubmit'
import { useForm } from 'react-hook-form'
import { ResetPasswordInput, ResetPasswordSchema } from '../shemas/authSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError } from '@/src/shared/components/forms/FormError.js'
import { redirect, useSearchParams } from 'next/navigation'
import { setPasswordAction } from '../actions/auth-actions'
import toast from 'react-hot-toast'

export function SetPasswordForm() {
	const searchParams = useSearchParams()

	const token = searchParams.get('token')
	if (!token) {
		redirect('/auth/forgot-password')
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ResetPasswordSchema),
		mode: 'all',
	})

	const onSubmit = async (data: ResetPasswordInput) => {
		const { success, error } = await setPasswordAction(data, token)

		if (error) {
			toast.error(error)
		}
		if (success) {
			toast.success(success)
			redirect('/auth/login')
		}
	}
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormLabel htmlFor="newPassword">Nueva contraseña</FormLabel>
			<FormInput
				type="password"
				id="newPassword"
				placeholder="Ingresa tu nueva contraseña"
				{...register('newPassword')}
			/>
			{errors.newPassword && (
				<FormError>{errors.newPassword.message}</FormError>
			)}
			<FormLabel htmlFor="confirmPassword">Confirmar contraseña</FormLabel>
			<FormInput
				type="password"
				id="confirmPassword"
				placeholder="Confirma tu nueva contraseña"
				{...register('passwordConfirmation')}
			/>
			{errors.passwordConfirmation && (
				<FormError>{errors.passwordConfirmation.message}</FormError>
			)}

			<FormSubmit value="Restablecer contraseña" />
		</Form>
	)
}

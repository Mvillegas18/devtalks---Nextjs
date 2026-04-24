'use client'

import {
	Form,
	FormError,
	FormInput,
	FormLabel,
	FormSubmit,
} from '@/components/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	type ForgotPasswordInput,
	ForgotPasswordSchema,
} from '../shemas/authSchema'
import { forgotPasswordAction } from '../actions/auth-actions.js'
import toast from 'react-hot-toast'

export function ForgotPasswordForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ForgotPasswordSchema),
		mode: 'all',
	})

	const onSubmit = async (data: ForgotPasswordInput) => {
		const { error, success } = await forgotPasswordAction(data)

		if (error) {
			toast.error(error)
		}

		if (success) {
			toast.success(success)
		}
	}

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormLabel htmlFor="email">E-mail:</FormLabel>
				<FormInput
					id="email"
					type="email"
					placeholder="me@email.com"
					{...register('email')}
				/>
				{errors.email && <FormError>{errors.email.message}</FormError>}
				<FormSubmit value="Enviar instrucciones" />
			</Form>
		</>
	)
}

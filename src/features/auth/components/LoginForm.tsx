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
import { type SignInInput, SignInSchema } from '../shemas/authSchema'
import { signInAction } from '@/src/features/auth/actions/auth-actions'
import { toast } from 'react-hot-toast/headless'
import { redirect } from 'next/navigation'

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(SignInSchema),
		mode: 'all',
	})

	const onSubmit = async (data: SignInInput) => {
		const { error, success } = await signInAction(data)

		if (error) {
			toast.error(error)
		}
		if (success) {
			toast.success(success)
			redirect('/dashboard')
		}
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormLabel htmlFor="email">E-mail:</FormLabel>
			<FormInput
				type="email"
				id="email"
				placeholder="Ingresa tu E-mail..."
				{...register('email', { required: 'El correo es requerido' })}
			/>
			{errors.email && <FormError>{errors.email.message}</FormError>}

			<FormLabel htmlFor="password">Password:</FormLabel>
			<FormInput
				type="password"
				id="password"
				placeholder="Ingresa tu contraseña..."
				{...register('password', { required: 'La contraseña es requerida' })}
			/>
			{errors.password && <FormError>{errors.password.message}</FormError>}

			<FormSubmit value="Iniciar sesión" />
		</Form>
	)
}

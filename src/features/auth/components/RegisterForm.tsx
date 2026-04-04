'use client'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormError,
	FormInput,
	FormLabel,
	FormSubmit,
} from '@/components/forms/index'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SignUpInput, SignUpSchema } from '../shemas/authSchema'
import { signUpAction } from '../actions/auth-actions'
import toast from 'react-hot-toast'

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(SignUpSchema),
		mode: 'all',
	})

	const onSubmit = async (data: SignUpInput) => {
		const { error, success } = await signUpAction(data)

		if (error) {
			// Handle error (e.g., display error message)
			toast.error(error)
		}

		if (success) {
			toast.success(success)
			reset() // Reset the form after successful submission
		}
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormLabel htmlFor="name">Nombre:</FormLabel>
			<FormInput
				type="text"
				id="name"
				placeholder="Ingresa tu nombre..."
				{...register('name')}
			/>

			{errors.name && <FormError>{errors.name.message}</FormError>}

			<FormLabel htmlFor="email">E-mail:</FormLabel>
			<FormInput
				type="email"
				id="email"
				placeholder="Ingresa tu E-mail..."
				{...register('email')}
			/>

			{errors.email && <FormError>{errors.email.message}</FormError>}

			<FormLabel htmlFor="password">Contraseña:</FormLabel>
			<FormInput
				type="password"
				id="password"
				placeholder="Ingresa tu contraseña..."
				{...register('password')}
			/>

			{errors.password && <FormError>{errors.password.message}</FormError>}

			<FormLabel htmlFor="passwordConfirmation">Repetir contraseña:</FormLabel>
			<FormInput
				type="password"
				id="passwordConfirmation"
				placeholder="Repite tu contraseña..."
				{...register('passwordConfirmation')}
			/>

			{errors.passwordConfirmation && (
				<FormError>{errors.passwordConfirmation.message}</FormError>
			)}

			<FormSubmit value="Registrarme" />
		</Form>
	)
}

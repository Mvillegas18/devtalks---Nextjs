'use client'

import {
	Form,
	FormInput,
	FormLabel,
	FormSubmit,
} from '@/components/forms/index'

export function RegisterForm() {
	return (
		<Form>
			<FormLabel htmlFor="nombre">Nombre:</FormLabel>
			<FormInput
				type="text"
				id="nombre"
				name="nombre"
				placeholder="Ingresa tu nombre..."
			/>
			<FormLabel htmlFor="email">E-mail:</FormLabel>
			<FormInput
				type="email"
				id="email"
				name="email"
				placeholder="Ingresa tu E-mail..."
			/>

			<FormLabel htmlFor="password">Contraseña:</FormLabel>
			<FormInput
				type="password"
				id="password"
				name="password"
				placeholder="Ingresa tu contraseña..."
			/>
			<FormLabel htmlFor="password_confirmation">Repetir contraseña:</FormLabel>
			<FormInput
				type="password"
				id="password_confirmation"
				name="password_confirmation"
				placeholder="Repite tu contraseña..."
			/>

			<FormSubmit value="Registrarme" />
		</Form>
	)
}

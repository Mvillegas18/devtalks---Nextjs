'use client'

import { Form, FormInput, FormLabel, FormSubmit } from '@/components/forms'

export function LoginForm() {
	return (
		<Form>
			<FormLabel htmlFor="email">E-mail:</FormLabel>
			<FormInput
				type="email"
				id="email"
				name="email"
				placeholder="Ingresa tu E-mail..."
			/>

			<FormLabel htmlFor="password">Password:</FormLabel>
			<FormInput
				type="password"
				id="password"
				name="password"
				placeholder="Ingresa tu contraseña..."
			/>

			<FormSubmit value="Iniciar sesión" />
		</Form>
	)
}

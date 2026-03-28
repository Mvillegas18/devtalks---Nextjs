'use client'

import { Form, FormInput, FormLabel, FormSubmit } from '@/components/forms'

export function ForgotPasswordForm() {
	return (
		<>
			<Form>
				<FormLabel htmlFor="email">E-mail:</FormLabel>
				<FormInput id="email" type="email" placeholder="me@email.com" />
				<FormSubmit value="Enviar instrucciones" />
			</Form>
		</>
	)
}

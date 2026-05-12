'use client'
import { Form } from '@/src/shared/components/forms/Form'
import { FormSubmit } from '@/src/shared/components/forms/FormSubmit'
import { CommunityForm } from './CommunityForm'

export function CreateCommunity() {
	return (
		<Form>
			<CommunityForm />
			<FormSubmit value="Crear Comunidad" />
		</Form>
	)
}

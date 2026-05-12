'use client'
import { Form } from '@/src/shared/components/forms/Form'
import { FormSubmit } from '@/src/shared/components/forms/FormSubmit'
import { CommunityForm } from './CommunityForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CommunityInput, CommunitySchema } from '../schema/communitySchema'
import { createCommunityAction } from '../actions/community-Action.js'

export function CreateCommunity() {
	const methods = useForm({
		resolver: zodResolver(CommunitySchema),
		mode: 'all',
		defaultValues: {
			name: '',
			description: '',
		},
	})

	const onSubmit = async (data: CommunityInput) => {
		await createCommunityAction(data)
	}

	return (
		<FormProvider {...methods}>
			<Form onSubmit={methods.handleSubmit(onSubmit)}>
				<CommunityForm />
				<FormSubmit value="Crear Comunidad" />
			</Form>
		</FormProvider>
	)
}

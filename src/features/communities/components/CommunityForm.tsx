import { FormInput } from '@/src/shared/components/forms/FormInput'
import { FormLabel } from '@/src/shared/components/forms/FormLabel'
import { FormTextArea } from '@/src/shared/components/forms/FormTextArea'
import { useFormContext } from 'react-hook-form'
import { type CommunityInput } from '../schema/communitySchema'
import { FormError } from '@/src/shared/components/forms/FormError'
import { UploadImage } from '@/src/shared/components/upload/UploadImage'

export function CommunityForm() {
	const {
		register,
		formState: { errors },
	} = useFormContext<CommunityInput>()
	return (
		<>
			<FormLabel htmlFor="name">Nombre de comunidad</FormLabel>
			<FormInput
				id="name"
				placeholder="Nombre de comunidad"
				{...register('name')}
			/>
			{errors.name && <FormError>{errors.name.message}</FormError>}

			<FormLabel htmlFor="image">Imagen de comunidad</FormLabel>
			<UploadImage />

			<FormLabel htmlFor="description">Descripción</FormLabel>
			<FormTextArea
				id="description"
				placeholder="Descripción de la comunidad"
				{...register('description')}
			/>
			{errors.description && (
				<FormError>{errors.description.message}</FormError>
			)}
		</>
	)
}

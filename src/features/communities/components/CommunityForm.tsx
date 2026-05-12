import { FormInput } from '@/src/shared/components/forms/FormInput'
import { FormLabel } from '@/src/shared/components/forms/FormLabel'
import { FormTextArea } from '@/src/shared/components/forms/FormTextArea'

export function CreateCommunity() {
	return (
		<>
			<FormLabel htmlFor="name">Nombre de comunidad</FormLabel>
			<FormInput id="name" name="name" placeholder="Nombre de comunidad" />

			<FormLabel htmlFor="description">Descripción</FormLabel>
			<FormInput
				id="description"
				name="description"
				placeholder="Descripción de la comunidad"
			/>

			<FormTextArea
				id="rules"
				name="rules"
				placeholder="Reglas de la comunidad"
			/>
		</>
	)
}

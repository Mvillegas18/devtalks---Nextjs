import { useState } from 'react'
import { UploadDropzone } from '../../utils/uploadthing'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { useFormContext } from 'react-hook-form'
import { CommunityInput } from '@/src/features/communities/schema/communitySchema'
import { FormError } from '../forms/FormError'

export function UploadImage() {
	const {
		formState: { errors },
		setValue,
		clearErrors,
	} = useFormContext<CommunityInput>()
	const [uploadedImage, setUploadedImage] = useState('')
	return (
		<>
			<UploadDropzone
				endpoint={'meetiUploader'}
				className="ut-button:bg-orange-600 ut-label:font-bold ut-label:text-orange-600 ut-label:py-2 ut-label:px-4 ut-label:rounded after:ut-button:bg-orange-500 after:ut-button:h-2 after:ut-button:top-0 ut-button:w-full"
				onClientUploadComplete={(res) => {
					setUploadedImage(res[0].ufsUrl)
					setValue('image', res[0].ufsUrl)
					clearErrors('image')
				}}
				config={{
					cn: twMerge,
					mode: 'auto',
				}}
				content={{
					button: 'Selecciona una imagen',
					label: 'Elige un archivo o arrastralo aqui',
					allowedContent: 'Maximo 1 imagen de 1MB',
				}}
			/>
			{errors.image && <FormError>{errors.image.message}</FormError>}

			{uploadedImage && (
				<div className="mt-4">
					<p className="font-medium">Imagen subida:</p>
					<Image
						src={uploadedImage}
						alt="Imagen subida"
						className="max-w-full h-auto"
						width={150}
						height={100}
					/>
				</div>
			)}
		</>
	)
}

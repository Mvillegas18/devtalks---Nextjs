import { useState } from 'react'
import { UploadDropzone } from '../../utils/uploadthing'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export function UploadImage() {
	const [uploadedImage, setUploadedImage] = useState('')
	return (
		<>
			<UploadDropzone
				endpoint={'meetiUploader'}
				className="ut-button:bg-orange-600 ut-label:font-bold ut-label:text-orange-600 ut-label:py-2 ut-label:px-4 ut-label:rounded after:ut-button:bg-orange-500 after:ut-button:h-2 after:ut-button:top-0 ut-button:w-full"
				onClientUploadComplete={(res) => setUploadedImage(res[0].ufsUrl)}
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

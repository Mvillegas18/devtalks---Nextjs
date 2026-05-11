import { Heading } from '@/src/shared/components/typography/Heading.js'
import { generatePageTitle } from '@/src/shared/utils/metadata.js'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: generatePageTitle('Communities'),
	description:
		'Administra tus comunidades en DevTalks. Crea, edita y gestiona tus grupos de discusión para conectar con otros desarrolladores. Mantén tus comunidades organizadas y activas desde tu panel de administración.',
	keywords: ['communities', 'administration', 'dashboard', 'devtalks'],
}

export default function CommunitiesPage() {
	return (
		<div className="max-h-screen flex justify-center">
			<div className="max-h-screen flex justify-center">
				<Heading className="text-4xl font-bold">Communities</Heading>
			</div>
		</div>
	)
}

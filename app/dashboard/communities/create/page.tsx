import { Heading } from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/link'

const title = 'Crear Comunidad'

export const metadata: Metadata = {
	title: generatePageTitle(title),
	description:
		'Crea una nueva comunidad en DevTalks. Comparte tus intereses, conecta con otros desarrolladores y construye un espacio para discutir temas relacionados con el desarrollo de software. Personaliza tu comunidad y hazla crecer desde tu panel de administración.',
	keywords: ['communities', 'administration', 'dashboard', 'devtalks'],
}

export default function CreateCommunitiesPage() {
	return (
		<>
			<Heading className="text-4xl font-bold">{title}</Heading>

			<Link
				href="/dashboard/communities"
				className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-xl text-white py-3 px-10  font-bold">
				Volver a mis Comunidades
			</Link>
		</>
	)
}

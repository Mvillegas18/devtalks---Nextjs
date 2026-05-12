import { Heading } from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/link'

const title = 'Comunidades a las que te uniste'

export const metadata: Metadata = {
	title: generatePageTitle(title),
	description:
		'Explora las comunidades a las que te has unido en DevTalks. Conéctate con otros desarrolladores, comparte conocimientos y participa en discusiones sobre temas de interés común. Gestiona tus membresías y mantén tu actividad en línea.',
	keywords: ['communities', 'joined communities', 'dashboard', 'devtalks'],
}

export default function JoinedCommunityPage() {
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

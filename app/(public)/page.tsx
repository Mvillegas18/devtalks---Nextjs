import { Hero } from '@/components/ui/Hero'
import { type Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Inicio - DevTalks',
	description:
		'Bienvenido a DevTalks, tu espacio para compartir conocimientos y experiencias en el mundo del desarrollo de software. Únete a nuestra comunidad y participa en discusiones, eventos y recursos para desarrolladores de todos los niveles.',
}

export default function Home() {
	return (
		<>
			<Hero />
		</>
	)
}

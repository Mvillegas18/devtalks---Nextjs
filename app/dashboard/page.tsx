import { requireAuth } from '@/src/lib/auth-server.js'
import { Heading } from '@/src/shared/components/typography/Heading'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
	const { isAuth } = await requireAuth()

	if (!isAuth) redirect('/auth/login')
	return (
		<div className="min-h-screen flex items-center justify-center">
			<Heading className="text-4xl font-bold">Panel de administracion</Heading>
		</div>
	)
}

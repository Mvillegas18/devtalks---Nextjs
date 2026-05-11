import { requireAuth } from '@/src/lib/auth-server'
import { Heading } from '@/src/shared/components/typography/Heading'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
	const { isAuth } = await requireAuth()

	if (!isAuth) redirect('/auth/login')
	return (
		<div className="max-h-screen flex justify-center">
			<Heading className="text-4xl font-bold">Panel de administracion</Heading>
		</div>
	)
}

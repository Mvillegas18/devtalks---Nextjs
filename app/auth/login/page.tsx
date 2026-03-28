import { LoginForm } from '@/src/features/auth/components/LoginForm'
import { Heading } from '@/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: generatePageTitle('Iniciar Sesión'),
}

export default function LoginPage() {
	return (
		<>
			<Heading>Iniciar Sesión</Heading>

			<LoginForm />

			<nav className="mt-20 flex justify-between">
				<Link href="/auth/register" className="font-bold">
					Crear cuenta
				</Link>
				<Link href="/auth/forgot-password">Olvide mi contraseña</Link>
			</nav>
		</>
	)
}

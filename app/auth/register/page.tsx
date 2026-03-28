import { RegisterForm } from '@/src/features/auth/components/RegisterForm'
import { Heading } from '@/src/shared/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import { Metadata } from 'next'
import Link from 'next/dist/client/link.js'

export const metadata: Metadata = {
	title: generatePageTitle('Crear Cuenta'),
}

export default function RegisterPage() {
	return (
		<>
			<Heading>Crear Cuenta</Heading>

			<RegisterForm />

			<nav className="mt-20 flex justify-between">
				<Link href="/auth/login" className="font-bold">
					Iniciar sesion
				</Link>
				<Link href="/auth/forgot-password">Olvide mi contraseña</Link>
			</nav>
		</>
	)
}

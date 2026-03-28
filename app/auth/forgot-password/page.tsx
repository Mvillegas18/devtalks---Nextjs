import { ForgotPasswordForm } from '@/src/features/auth/components/ForgotPasswordForm'
import { Heading } from '@/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import type { Metadata } from 'next'
import Link from 'next/dist/client/link.js'

export const metadata: Metadata = {
	title: generatePageTitle('Recuperar contraseña'),
}

export default function ForgotPasswordPage() {
	return (
		<>
			<Heading>Recupera tu contraseña</Heading>
			<ForgotPasswordForm />

			<nav className="mt-20 flex justify-between">
				<Link href="/auth/login" className="font-bold">
					Iniciar sesion
				</Link>
				<Link href="/auth/register">Crear cuenta</Link>
			</nav>
		</>
	)
}

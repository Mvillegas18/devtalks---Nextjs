import { Heading } from '@/components/typography/Heading'
import { generatePageTitle } from '@/src/shared/utils/metadata'
import type { Metadata } from 'next'
import Link from 'next/dist/client/link.js'
import { SetPasswordForm } from '@/src/features/auth/components/SetPasswordForm'

export const metadata: Metadata = {
	title: generatePageTitle('Restablecer contraseña'),
}

export default function ResetPasswordPage() {
	return (
		<>
			<Heading>Restablece tu contraseña</Heading>
			<SetPasswordForm />

			<nav className="mt-8 flex justify-between">
				<Link href="/auth/login" className="font-bold">
					Iniciar sesion
				</Link>
				<Link href="/auth/register">Crear cuenta</Link>
			</nav>
		</>
	)
}

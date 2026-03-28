import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className="flex justify-center">
				<Link href="/" className="w-72">
					<Logo />
				</Link>
			</div>
			<main className="max-w-2xl mx-auto py-16 px-5">{children}</main>
		</>
	)
}

import Link from 'next/link'
import { Logo } from './Logo'
import { GuestNavigation } from './GuestNavigation'

export function Header() {
	return (
		<header className="border-b border-gray-200">
			<div className="md:flex md:justify-between md:items-center max-w-7xl mx-20 p-5 lg:px-0">
				<div className="flex justify-center py-10 md:py-0">
					<Link href="/">
						<div className="w-72">
							<Logo />
						</div>
					</Link>
				</div>
				{/* TODO: Navegación Aquí */}
				<GuestNavigation />
			</div>
		</header>
	)
}

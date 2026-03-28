type Props = {
	children: React.ReactNode
}

export function FormError({ children }: Props) {
	return (
		<p
			className="border-l-2 font-bold bg-red-100 border-red-600 text-sm text-red-600 px-4 py-2 mt-1"
			role="alert">
			{children}
		</p>
	)
}

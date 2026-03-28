import clsx from 'clsx'
import { FormHTMLAttributes } from 'react'

type Props = FormHTMLAttributes<HTMLFormElement>

export function Form(props: Props) {
	const { children, className } = props

	return (
		<form
			className={clsx('mt-10 space-y-3 p-5 shadow-2xl', className)}
			{...props}>
			{children}
		</form>
	)
}

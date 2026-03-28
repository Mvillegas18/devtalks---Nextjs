import { LabelHTMLAttributes } from 'react'

type Props = LabelHTMLAttributes<HTMLLabelElement>

export function FormLabel(props: Props) {
	return (
		<div>
			<label className="block" {...props}>
				{props.children}
			</label>
		</div>
	)
}

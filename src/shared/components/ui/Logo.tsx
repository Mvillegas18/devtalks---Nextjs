import Image from 'next/image.js'

export function Logo() {
	return <Image src="/logo.svg" alt="DevTalks Logo" width={400} height={200} />
}

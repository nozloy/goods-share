'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
	className?: string
	title: string
}

export const Header: React.FC<Props> = ({ className, title }) => {
	const router = useRouter()
	return (
		<div
			className={cn(
				'sticky top-0 z-50 text-center p-4 w-full bg-background',
				className,
			)}
		>
			<div className=' text-lg fotn-bold'>{title}</div>
			<div
				onClick={() => router.back()}
				className='absolute w-10 h-10 top-5 left-5'
			>
				<ArrowLeft size={24} />
			</div>
		</div>
	)
}

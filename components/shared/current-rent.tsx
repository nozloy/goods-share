import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
	className?: string
}

export const CurrentRent: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('flex flex-col gap-2 px-4', className)}>
			<div className='border border-muted-foreground border-dashed w-full  p-4 rounded-xl text-center'>
				<p>У Вас нет арендованных устройств на данный момент</p>
				<Link href={'/catalog'} className='text-primary'>
					Арендовать устройство
				</Link>
			</div>
		</div>
	)
}

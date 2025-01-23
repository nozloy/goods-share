import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { getRents } from '@/lib/prisma'
import { Items } from '@/constants/items'
import Image from 'next/image'
import { SquareChevronRight } from 'lucide-react'
import { Rents } from '@prisma/client'

interface Props {
	className?: string
}

export const CurrentRent: React.FC<Props> = async ({ className }) => {
	const rents = await getRents(1)
	return (
		<div className={cn('flex flex-col gap-2 px-4', className)}>
			{!rents.length ? (
				<div className='border border-muted-foreground border-dashed w-full  p-4 rounded-xl text-center'>
					<p>У Вас нет арендованных устройств на данный момент</p>
					<Link href={'/catalog'} className='text-primary'>
						Арендовать устройство
					</Link>
				</div>
			) : (
				rents.map((rent: Rents) => (
					<div
						key={rent.id}
						className='border border-muted-foreground border-dashed w-full  p-4 rounded-xl text-center'
					>
						<div className='flex flex-row gap-2 items-center justify-center'>
							<Image
								src={Items.find(item => item.id === rent.itemId)?.image || ''}
								alt={Items.find(item => item.id === rent.itemId)?.name || ''}
								className='object-contain mx-auto pt-2 rounded-2xl'
								width={100}
								height={100}
							/>
							<div className='flex flex-col items-start justify-center gap-1'>
								<p className='font-bold'>
									{Items.find(item => item.id === rent.itemId)?.name}
								</p>
								<p className='flex flex-row items-center gap-1 text-muted-foreground font-semibold'>
									{rent.createdAt.toLocaleString('ru-RU', {
										month: 'long',
										day: 'numeric',
										hour: 'numeric',
										minute: 'numeric',
									})}
									<SquareChevronRight size={16} />
									{rent.endAt.toLocaleString('ru-RU', {
										month: 'long',
										day: 'numeric',
										hour: 'numeric',
										minute: 'numeric',
									})}
								</p>
								<p>Стоимость аренды: {rent.price}</p>
								<p>Код доступа: {rent.accessCode}</p>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface Item {
	id: number
	name: string
	image: string
	price: number
	description: string
}
interface Props {
	className?: string
	item: Item
}

export const ItemCard: React.FC<Props> = ({ className, item }) => {
	return (
		<div className={cn('pt-6', className)}>
			<Link href={'/item/' + item.id}>
				<Card
					key={item.name}
					className=' flex flex-col w-[170px] h-[300px] shadow-xl p-0'
				>
					<div className='flex items-center justify-center w-[150px] h-[190px] relative mx-auto'>
						<Image
							fill
							src={item.image}
							alt={item.name}
							className='object-contain mx-auto pt-2 rounded-2xl'
						/>
					</div>
					<CardHeader className='p-3'>
						<CardTitle className='text-sm'>{item.name}</CardTitle>
					</CardHeader>
					<div className='p-3 mt-auto'>
						<Button className=' font-bold'>от {item.price}₽</Button>
					</div>
				</Card>
			</Link>
		</div>
	)
}

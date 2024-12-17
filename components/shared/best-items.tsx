import React from 'react'
import { cn } from '@/lib/utils'
import { ItemCard } from './item-card'
import { Items } from '@/constants/items'
interface Props {
	className?: string
}

export const BestItems: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<div className='text-lg font-bold px-4'>Популярные предложения</div>
			<div className='flex flex-row gap-2 h-[360px] w-full justify-left overflow-x-scroll overflow-hidden invisible-scrollbar px-2'>
				{Items.filter(item => item.id < 4).map(item => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

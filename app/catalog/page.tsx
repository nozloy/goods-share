import React from 'react'
import { Items } from '@/constants/items'
import { ItemCard } from '@/components/shared/item-card'
import { Header } from '@/components/shared/header'
export default function Catalog() {
	return (
		<div className='w-full'>
			<Header title='Каталог' />
			<div className='grid grid-cols-2 gap-4 overflow-y-scroll overflow-hidden invisible-scrollbar pb-24 mx-auto pl-2'>
				{Items.map(item => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

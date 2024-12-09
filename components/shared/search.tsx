import React from 'react'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Search as SearchIcon } from 'lucide-react'

interface Props {
	className?: string
}

export const Search: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'w-full rounded-2xl relative flex flex-1 justify-between h-16 px-4',
				className,
			)}
		>
			<SearchIcon className='absolute top-1/2 translate-y-[-50%] left-7 h-5 text-gray-400' />
			<Input
				type='text'
				placeholder='Поиск товаров'
				className='rounded-2xl outline-none w-full bg-secondary pl-11'
			/>
		</div>
	)
}

import React from 'react'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

interface Props {
	className?: string
	description?: string
}

export const DescriptionDrawer: React.FC<Props> = ({
	className,
	description,
}) => {
	return (
		<div className={cn('', className)}>
			{' '}
			<Drawer>
				<DrawerTrigger className='select-none border-transparent focus:border-transparent focus:ring-0 outline-none flex items-center'>
					<div className='w-8 h-8 rounded-lg shadow-lg bg-background flex items-center justify-center'>
						<Info className='bg-primary rounded-full text-white' />
					</div>
				</DrawerTrigger>
				<DrawerContent className='pb-10'>
					<DrawerHeader>
						<DrawerTitle>Описание</DrawerTitle>
					</DrawerHeader>
					<div className='px-4'>{description}</div>
					<DrawerFooter>
						<DrawerClose asChild></DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

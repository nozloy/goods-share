import React from 'react'
import { cn } from '@/lib/utils'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '../ui/button'
import { Headset } from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
}

export const SupportDrawer: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Drawer>
				<DrawerTrigger className='select-none border-transparent focus:border-transparent focus:ring-0 outline-none flex items-center'>
					<Headset size={24} />
				</DrawerTrigger>
				<DrawerContent className='pb-10'>
					<DrawerHeader>
						<DrawerTitle>Техническая поддержка</DrawerTitle>
					</DrawerHeader>
					<DrawerFooter>
						<Link href={'https://t.me/goods_sharing_bot'} target='_blank'>
							<Button className='w-full rounded-xl text-xl py-6'>
								Написать в чат
							</Button>
						</Link>
						<DrawerClose asChild>
							<Link href={'tel:+9999999999'} target='_blank'>
								<Button
									className='w-full rounded-xl text-xl py-6'
									variant='outline'
								>
									Позвонить
								</Button>
							</Link>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

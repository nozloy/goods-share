import { Header } from '@/components/shared/header'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Faq } from '@/components/shared/faq'
export default function More() {
	return (
		<div className='flex flex-col'>
			<Header title='О приложении' />
			<div className='flex flex-col gap-4 justify-center items-center'>
				<Image
					className='mx-auto  '
					src='/icon-192x192.png'
					alt='logo'
					width={100}
					height={100}
				/>
				<div className='text-2xl font-bold'>Ларек</div>
				<div className='absolute bottom-32 left-0 right-0 w-full px-4 flex flex-col gap-2 mt-auto *:w-full *:bg-secondary *:text-secondary-foreground *:h-12 *:font-bold'>
					<Faq />
					<Button variant={'outline'} className='flex justify-between'>
						Политика конфиденциальности
						<ChevronRight />
					</Button>
					<Button variant={'outline'} className='flex justify-between'>
						Обратная связь
						<ChevronRight />
					</Button>
					<Button variant={'outline'} className='flex justify-between'>
						Поддержка
						<ChevronRight />
					</Button>
				</div>
			</div>
		</div>
	)
}
